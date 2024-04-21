'use client';

import {Form, FormProps } from 'antd';
import {LockOutlined, UserOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';

import React from 'react'
import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword';

import * as S from './styles';

type FieldType = {
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
            prefix={<LockOutlined />}
            isRequired
            label="Password"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="confirmPassword"
          rules={[{ required: true, message: 'Please input the same password!' }]}
        >
          <InputPassword
            placeholder="*****"
            prefix={<LockOutlined />}
            isRequired
            label="Confirm Password"
          />
        </Form.Item>
        <FormItem>
          <S.ButtonLogin type="primary" htmlType="submit">
            Sign Up
          </S.ButtonLogin>
        </FormItem>
        <FormItem>
          <S.ButtonLogin type="default" >
            Sign In
          </S.ButtonLogin>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  )
}

export default FormSignUp