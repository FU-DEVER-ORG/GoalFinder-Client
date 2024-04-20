'use client';

import * as S from './styles';
import { LockOutlined, EyeOutlined } from '@ant-design/icons';
import Button from '@/components/core/common/Button';
import React from 'react';
import { Form } from 'antd';
import Input from '@/components/core/common/form/Input';
import Link from 'next/link';
const FormItem = Form.Item;
import { IProps } from '../Main';
import InputNumber from '@/components/core/common/form/InputNumber';
export class FormReset extends React.Component {
  hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some((field) => fieldsError[field]);
  }
  render() {
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
            {/* <Link href={'/reset-password'}> */}
            <Button
              $width={'100%'}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Save
            </Button>
            {/* </Link> */}
          </FormItem>
        </Form>
      </>
    );
  }
}
