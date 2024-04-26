'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Form, FormProps } from 'antd';

import Button from '@/components/core/common/Button';
import InputPassword from '@/components/core/common/form/InputPassword';

import * as S from './styles';
import { useResetPasswordMutation } from '@/store/services/auth';

const FormReset = () => {
  const route = useRouter();
  const FormItem = Form.Item;

  const otpCode = sessionStorage.getItem('otpCode');

  const [password, setPassword] = useState<string>('');

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const REGEX_UPPER_CASE = /[A-Z]+/;
  const REGEX_DIGI_CASE = /[0-9]+/;

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

        if (REGEX_UPPER_CASE.test(value)) countPasswordUpper++;
        if (REGEX_DIGI_CASE.test(value)) countPasswordDigit++;

        if (countPasswordUpper === 0) {
          reject('Mật khẩu phải chứa ít nhất 1 chữ cái viết hoa');
        } else if (countPasswordDigit === 0) {
          reject('Mật khẩu phải chứa ít nhất 1 chữ số');
        } else {
          resolve();
        }
      }
    });
  };

  type FieldType = {
    otpCode?: string;
    newPassword?: string;
    confirmPassword?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('otp test: ', otpCode);
    try {
      const data = {
        otpCode: otpCode!,
        newPassword: values.newPassword!,
        confirmPassword: values.confirmPassword!,
      };
      console.log('newPassword: ', data.newPassword);

      const res: any = await resetPassword(data);
      console.log('test ', res?.data);
      route.push('/sign-in');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form className="resetWrapper" onFinish={onFinish}>
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
        >
          Lưu
        </Button>
      </FormItem>
    </Form>
  );
};

export default FormReset;
