'use client';

import { Checkbox, Flex, Form, FormProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { LockOutlined, PhoneOutlined } from '@ant-design/icons';

import Input from '@/components/core/common/form/Input';
import InputPassword from '@/components/core/common/form/InputPassword';

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
          rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
        >
          <Input
            placeholder="0XXXXXX"
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
          <FormItem<FieldType>
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Nhớ mật khẩu</Checkbox>
          </FormItem>
          <S.LinkTag href=''>Quên mật khẩu</S.LinkTag>
        </S.RowRememberForgot>
        <FormItem>
          <S.ButtonLogin type="primary" htmlType="submit">
            Đăng nhập
          </S.ButtonLogin>
        </FormItem>
        <FormItem>
          <S.ButtonLogin type="default" >
            Đăng ký
          </S.ButtonLogin>
        </FormItem>
      </Form>
    </S.HomeWrapper>
  )
}

export default FormSignin