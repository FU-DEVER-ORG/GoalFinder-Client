import React from 'react';

import { LockOutlined, EyeOutlined } from '@ant-design/icons';
import { Form } from 'antd';

import Button from '@/components/core/common/Button';
import Input from '@/components/core/common/form/Input';

import * as S from './styles';

const FormItem = Form.Item;

const FormReset = () => {
  return (
    <>
      <Form>
        <FormItem>
          <S.Input>
            <Input
              width={'100%'}
              placeholder="Mật khẩu"
              prefix={<LockOutlined />}
              label="Mật khẩu mới"
              suffix={<EyeOutlined />}
              // suffix={<EyeInvisibleOutlined />}
            />
            <Input
              width={'100%'}
              placeholder="Xác nhận mật khẩu mới"
              prefix={<LockOutlined />}
              label="Xác nhận mật khẩu mới"
              suffix={<EyeOutlined />}
            />
          </S.Input>
        </FormItem>
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
    </>
  );
};

export default FormReset;
