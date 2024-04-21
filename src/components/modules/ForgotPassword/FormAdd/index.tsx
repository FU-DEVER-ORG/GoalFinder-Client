'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import Button from '@/components/core/common/Button';
import Input from '@/components/core/common/form/Input';
import InputNumber from '@/components/core/common/form/InputNumber';

import * as S from './styles';

interface PageProps {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

const FormItem = Form.Item;

const FormAdd = ({ navigation, setNavigation }: PageProps) => {
  const route = useRouter();
  const [form] = Form.useForm();
  const [digits, setDigits] = useState(['', '', '', '']);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setNavigation('step2');
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const handleChange = (index: number, value: string) => {
    const updateDigit = [...digits];
    updateDigit[index] = value;
    setDigits(updateDigit);
  };

  const handleSubmitVerification = async () => {
    try {
      const otp = digits.join('');
      const values = await form.validateFields();
      console.log('otp:', otp);
      console.log('Success:', values);
      route.push('/reset-password');
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <>
      {navigation === 'step1' ? (
        <S.Input>
          <Form form={form} onFinish={handleSubmit}>
            <FormItem
              name={'email'}
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
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
            <Form form={form} onFinish={handleSubmitVerification}>
              <S.InputNumber>
                {digits.map((digit, index) => (
                  <FormItem
                    key={index}
                    name={`OTP${index + 1}`}
                    rules={[{ required: true, message: 'Input the OTP!' }]}
                  >
                    <InputNumber
                      min={0}
                      max={9}
                      width={'30%'}
                      value={digit}
                      onChange={(e: any) => {
                        handleChange(index, e);
                      }}
                    />
                  </FormItem>
                ))}
              </S.InputNumber>
              <FormItem>
                <Button $width={'100%'} type="default" htmlType="submit">
                  Verify
                </Button>
              </FormItem>
            </Form>
          </S.Input>
        </>
      )}
    </>
  );
};

export default FormAdd;
