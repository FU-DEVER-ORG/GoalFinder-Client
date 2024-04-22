'use client';

import {Form, FormProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import {LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword';
import { ButtonCommon } from '@/components/core/common/Button/button.styles';

import * as S from './styles';

type FieldType = {
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
};

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
          rules={[{ required: true, message: 'Hãy nhập email!' }]}
        >
          <Input
            placeholder="example@gmail.com"
            prefix={<MailOutlined />}
            isRequired
            label="Email"
          />
        </FormItem>
        <Form.Item<FieldType>
          name="phone"
          rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
        >
          <Input
            placeholder="0xxxxxx"
            prefix={<PhoneOutlined />}
            isRequired
            label="Số điện thoại"
          />
        </Form.Item>

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
          <ButtonCommon $width={'100%'} type="primary" htmlType="submit">
            Đăng ký
          </ButtonCommon>
        </FormItem>
        <FormItem>
          <ButtonCommon $width={'100%'} type="default" href='/sign-in'>
            Đăng nhập
          </ButtonCommon>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  )
}

export default FormSignUp