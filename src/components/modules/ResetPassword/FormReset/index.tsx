'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Form, FormProps, message } from 'antd';
import { useResetPasswordMutation } from '@/store/services/auth';

import Button from '@/components/core/common/Button';
import InputPassword from '@/components/core/common/form/InputPassword';

import * as S from './styles';

const FormReset = () => {
  const route = useRouter();
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  const otpCode = sessionStorage.getItem('otpCode');

  const [password, setPassword] = useState<string>('');

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const REGEX_UPPER_CASE = /[A-Z]+/;
  const REGEX_DIGI_CASE = /[0-9]+/;
  const REGEX_SPECIAL_CASE = /[^A-Za-z0-9\s]/;

  const validateReset = (_: any, value: string) => {
    return new Promise<void>((resolve, reject) => {
      if (!value) {
        reject('Vui lòng nhập mật khẩu');
      } else if (password !== value) {
        reject('Mật khẩu xác nhận phải giống với mật khẩu bạn vừa đặt');
      } else {
        resolve();
      }
    });
  };

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
    otpCode?: string;
    newPassword?: string;
    confirmPassword?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const data = {
        otpCode: otpCode!,
        newPassword: values.newPassword!,
        confirmPassword: values.confirmPassword!,
      };
      const payload = await resetPassword(data).unwrap();
      console.log(payload);
      route.push('/sign-in');
      message.success('Đổi mật khẩu thành công');
    } catch (error) {}
  };
  return (
    <Form form={form} className="resetWrapper" onFinish={onFinish}>
      <S.Input>
        <FormItem rules={[{ validator: validatePassword }]} name="newPassword">
          <InputPassword
            width={'100%'}
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            label="Mật khẩu mới"
            onChangeCapture={(e) => {
              setPassword(e.currentTarget.value);
            }}
            autoComplete="newPassword"
          />
        </FormItem>

        <FormItem
          name="confirmPassword"
          dependencies={['password']}
          rules={[{ validator: validateReset }]}
        >
          <InputPassword
            width={'100%'}
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            label="Xác nhận mật khẩu mới"
            autoComplete="confirmPassword"
          />
        </FormItem>
      </S.Input>

      <FormItem>
        <Button
          $width={'100%'}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={isLoading}
        >
          Lưu
        </Button>
      </FormItem>
    </Form>
  );
};

export default FormReset;
