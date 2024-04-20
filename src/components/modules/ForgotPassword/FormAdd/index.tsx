'use client';
import * as S from './styles';
import { MailOutlined } from '@ant-design/icons';
import Button from '@/components/core/common/Button';
import React from 'react';
import { Form } from 'antd';
import Input from '@/components/core/common/form/Input';
import Link from 'next/link';
const FormItem = Form.Item;
import { IProps } from '../Main';
import InputNumber from '@/components/core/common/form/InputNumber';
import { useRouter } from 'next/navigation';

function FormAdd(props: IProps) {
  const route = useRouter();
  const handleSubmit = (e: any) => {
    props.setNavigation('step2');
    console.log(e.target[0].defaultValue);
  };
  const handleSubmitVerification = (e: any) => {
    console.log('imple fc');
    console.log(e.target[0].value);
    console.log(e.target[1].value, e.target[2].value, e.target[3].value);

    route.push('/reset-password');
  };

  return (
    <>
      {props.navigation === 'step1' ? (
        <S.Input>
          <Form onSubmitCapture={(e) => handleSubmit(e)}>
            <FormItem>
              <Input
                width={'100%'}
                placeholder="******@gmail.com"
                prefix={<MailOutlined />}
              />
            </FormItem>

            <FormItem>
              <Button
                $width={'100%'}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Send OTP
              </Button>
            </FormItem>
          </Form>
        </S.Input>
      ) : (
        <>
          <S.Input>
            <Form onSubmitCapture={(e) => handleSubmitVerification(e)}>
              <FormItem>
                <S.InputNumber>
                  <InputNumber min={0} max={9} width={'25%'} />
                  <InputNumber
                    min={0}
                    max={9}
                    maxLength={1}
                    width={'25%'}
                  />{' '}
                  <InputNumber min={0} max={9} maxLength={1} width={'25%'} />{' '}
                  <InputNumber min={0} max={9} maxLength={1} width={'25%'} />
                </S.InputNumber>
              </FormItem>
              <FormItem>
                <Button
                  $width={'100%'}
                  type="default"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Verify
                </Button>
              </FormItem>
            </Form>
          </S.Input>
        </>
      )}
    </>
  );
}

export default FormAdd;
