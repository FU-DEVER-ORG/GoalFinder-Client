'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormProps,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';

import { useSignUpMutation } from '@/store/services/auth';

import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword';
import Button from '@/components/core/common/Button';

import * as S from './styles';

const REGEX_UPPER_CASE = /[A-Z]+/;
const REGEX_DIGI_CASE = /[0-9]+/;
const REGEX_SPECIAL_CASE = /[^A-Za-z0-9\s]/;

const validatePassword = (_: any, value: string) => {
  return new Promise<void>((resolve, reject) => {
    if (!value) {
      reject('Vui lòng nhập mật khẩu');
    } else if (value.length > 0 && value.length < 8) {
      reject('Mật khẩu lớn hơn 8 ký tự');
    } else {
      let countPasswordDigit = 0;
      let countPasswordUpper = 0;
      let countPasswordSpecial = 0;

      if (REGEX_UPPER_CASE.test(value)) countPasswordUpper++;
      if (REGEX_DIGI_CASE.test(value)) countPasswordDigit++;
      if (REGEX_SPECIAL_CASE.test(value)) countPasswordSpecial++;

      if (countPasswordUpper === 0) {
        reject('Mật khẩu phải chứa ít nhất 1 chữ cái viết hoa');
      } else if (countPasswordDigit === 0) {
        reject('Mật khẩu phải chứa ít nhất 1 chữ số');
      } else if (countPasswordSpecial === 0) {
        reject('Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt');
      } else resolve();
    }
  });
};

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function FormSignUp() {
  const router = useRouter();
  const [signUp, { isLoading }] = useSignUpMutation();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const data = {
        email: values.email!,
        password: values.confirmPassword!,
      };
      await signUp(data).unwrap();
      router.push('/sign-in')
    } catch (error) {
    }
  };

  return (
    <S.HomeWrapper>
      <Form
        name="basic"
        style={{ width: '100%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem<FieldType>
          name="email"
          rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
        >
          <Input
            placeholder="0xxxxxxxx"
            prefix={<PhoneOutlined />}
            isRequired
            label="Số điện thoại"
          />
        </FormItem>
        <Form.Item<FieldType>
          name="password"
          rules={[
            { validator: validatePassword }
          ]}
        >
          <InputPassword
            placeholder="*****"
            prefix={<LockOutlined />}
            isRequired
            label="Mật khẩu"
          />
        </Form.Item>

        <Form.Item<FieldType>
          dependencies={['password']}
          name="confirmPassword"
          rules={[{ required: true, message: 'Hãy nhập lại đúng mật khẩu!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Hãy nhập lại đúng mật khẩu!'));
            },
          }),]}
        >
          <InputPassword
            placeholder="*****"
            prefix={<LockOutlined />}
            isRequired
            label="Nhập lại mật khẩu"
          />
        </Form.Item>
        <FormItem>
          <Button $width={'100%'} type="primary" htmlType="submit" loading={isLoading}>
            Đăng ký
          </Button>
        </FormItem>
        <FormItem>
          <Link href={'/sign-in'}>
            <Button $width={'100%'} type="default">
              Đăng nhập
            </Button>
          </Link>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  );
}

export default FormSignUp;
