'use client';

import Link from 'next/link';
import {Form, FormProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';

import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword';
import Button from '@/components/core/common/Button';

import * as S from './styles';

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const validateMessage = {
  

}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function FormSignUp() {
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
          name="confirmPassword"
          rules={[{ required: true, message: 'Hãy nhập lại đúng mật khẩu!' }]}
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