'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Checkbox, Form, FormProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';

import { useSignInMutation } from '@/store/services/auth';

import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword';
import Button from '@/components/core/common/Button';

import * as S from './styles';

type FieldType = {
  email?: string;
  password?: string;
  isRemember?: boolean;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function FormSignin() {
  const router = useRouter();
  const [signIn, { isLoading }] = useSignInMutation();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const data = {
        username: values.email!,
        password: values.password!,
        isRemember: values.isRemember!,
      };
      const res = await signIn(data).unwrap();
      router.push('/');
    } catch (error) {}
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
          label=""
          name="email"
          rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
        >
          <Input
            placeholder="0XXXXXXXX"
            prefix={<PhoneOutlined />}
            isRequired
            label="Số điện thoại"
          />
        </FormItem>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
        >
          <InputPassword
            placeholder="*****"
            prefix={<LockOutlined />}
            isRequired
            label="Mật khẩu"
          />
        </Form.Item>
        <S.RowRememberForgot>
          <FormItem<FieldType> name="isRemember" valuePropName="checked">
            <Checkbox>Nhớ mật khẩu</Checkbox>
          </FormItem>
          <S.LinkTag href="/forgot-password">Quên mật khẩu</S.LinkTag>
        </S.RowRememberForgot>
        <FormItem>
          <Button
            $width={'100%'}
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Đăng nhập
          </Button>
        </FormItem>
        <FormItem>
          <Link href={'/sign-up'}>
            <Button $width={'100%'} type="default">
              Đăng ký
            </Button>
          </Link>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  );
}

export default FormSignin;
