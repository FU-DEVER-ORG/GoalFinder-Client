'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {Form, FormProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';

import { authEndpoint } from '@/services/endpoint';
import { postRequest } from '@/services/request';
import { constants } from '@/settings';

import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword';
import Button from '@/components/core/common/Button';


import * as S from './styles';


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
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
    try {

      const data = {
        email: values.email,
        password: values.confirmPassword,
      }

      const res :any = postRequest(
        constants.API_SERVER + authEndpoint.SIGN_UP, 
        {data}
      ) 
      console.log(res);
      router.push('/sign-in');
    } catch (error) {
      console.log(error);
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
          rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
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
          <Button $width={'100%'} type="primary" htmlType="submit">
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
  )
}

export default FormSignUp