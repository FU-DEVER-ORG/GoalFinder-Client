'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Form } from 'antd';

import Button from '@/components/core/common/Button';
import InputPassword from '@/components/core/common/form/InputPassword';

import * as S from './styles';

const FormReset = () => {
  const route = useRouter();
  const FormItem = Form.Item;

  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(true);
  const [isErrorReset, setIsErrorReset] = useState<boolean>(true);

  const REGEX_UPPER_CASE = /[A-Z]+/;
  const REGEX_DIGI_CASE = /[0-9]+/;

  const validateReset = (_: any, value: string, callback: any) => {
    if (!value) {
      return callback('Vui lòng nhập mật khẩu');
    }
    if (password != value) {
      callback('Mật khẩu xác nhận phải giống với mật khẩu bạn vừa đặt');
      setIsErrorReset(true);
    } else {
      setIsErrorReset(false);
    }
  };

  const validatePassword = (_: any, value: string, callback: any) => {
    if (!value) {
      return callback('Vui lòng nhập mật khẩu');
    }
    if (value && value?.length > 0 && value?.length < 8)
      return callback('Mật khẩu lớn hơn 8 ký tự');

    let countPasswordDigit = 0;
    let countPasswordUpper = 0;

    if (REGEX_UPPER_CASE.test(value)) countPasswordUpper++;
    if (REGEX_DIGI_CASE.test(value)) countPasswordDigit++;

    if (countPasswordUpper === 0)
      return callback('Mật khẩu phải chứa ít nhất 1 chữ cái viết hoa');
    if (countPasswordDigit === 0)
      return callback('Mật khẩu phải chứa ít nhất 1 chữ số');
    setIsError(false);
    callback();
  };

  return (
    <Form
      className="resetWrapper"
      onSubmitCapture={() => {
        isError === false && isErrorReset === false ? (
          route.push('/sign-in')
        ) : (
          <></>
        );
      }}
    >
      <S.Input>
        <FormItem name="password" rules={[{ validator: validatePassword }]}>
          <InputPassword
            width={'100%'}
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            label="Mật khẩu mới"
            onChangeCapture={(e) => {
              setPassword(e.currentTarget.value);
            }}
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
