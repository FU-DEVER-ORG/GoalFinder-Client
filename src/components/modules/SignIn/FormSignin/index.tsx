'use client';

import { Checkbox, Form, FormProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { UserOutlined } from '@ant-design/icons';

import React from 'react'
import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword/index';

import * as S from './styles';

type FieldType = {
  phone?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function FormSignin() {
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
          name="phone"
          rules={[{ required: true, message: 'Please input your phone!' }]}
        >
          <Input
            placeholder="0XXXXXX"
            prefix={<UserOutlined />}
            isRequired
            label="Phone"
          />
        </FormItem>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <InputPassword
            placeholder="*****"
            prefix={<UserOutlined />}
            isRequired
            label="Password"
          />
        </Form.Item>

        <FormItem<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </FormItem>
        <FormItem>
          <S.ButtonLogin type="primary" htmlType="submit">
            Sign In
          </S.ButtonLogin>
        </FormItem>
        <FormItem>
          <S.ButtonLogin type="default" >
            Sign Up
          </S.ButtonLogin>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  )
}

export default FormSignin