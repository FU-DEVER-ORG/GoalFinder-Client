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
              placeholder="Password"
              prefix={<LockOutlined />}
              label="Password"
              suffix={<EyeOutlined />}
              // suffix={<EyeInvisibleOutlined />}
            />
            <Input
              width={'100%'}
              placeholder="Confirm password"
              prefix={<LockOutlined />}
              label="Confirm password"
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
            Save
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default FormReset;
