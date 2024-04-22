'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Form, Menu, Space, Statistic, Dropdown } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Modal from 'antd/es/modal/Modal';
import { CaretDownOutlined } from '@ant-design/icons';

import { useModal } from '@/hooks';
import Button from '@/components/core/common/Button';
import Input from '@/components/core/common/form/Input';
import Typography from '@/components/core/common/Typography';
import InputNumber from '@/components/core/common/form/InputNumber';

import * as S from './styles';

interface PageProps {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

const FormAdd = ({ navigation, setNavigation }: PageProps) => {
  const route = useRouter();
  const [form] = Form.useForm();
  const { Countdown } = Statistic;
  const FormItem = Form.Item;
  const modalState = useModal();

  const [digits, setDigits] = useState(['', '', '', '']);

  const phoneAreaData = [
    {
      country: 'Việt Nam',
      code: '+84',
      flag: '/images/forgot-password/flag/84.png',
    },
    {
      country: 'Pháp',
      code: '+33',
      flag: '/images/forgot-password/flag/33.jpg',
    },
    {
      country: 'Đức',
      code: '+49',
      flag: '/images/forgot-password/flag/49.jpg',
    },

    {
      country: 'Ý',
      code: '+39',
      flag: '/images/forgot-password/flag/39.svg',
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(phoneAreaData[0]);

  const menu = (
    <Menu onClick={handleMenuClick}>
      {phoneAreaData.map((area) => (
        <Menu.Item key={area.code}>
          <S.InputMenu key={area.code}>
            <Typography>{area.country}</Typography>
            <Image alt="" src={area.flag} width={25} height={20} />
          </S.InputMenu>
        </Menu.Item>
      ))}
    </Menu>
  );

  function handleMenuClick(e: any): void {
    const clickedCountry = phoneAreaData.find((area) => area.code === e.key);
    if (clickedCountry) {
      setSelectedCountry(clickedCountry);
    }
  }

  const handleSubmit = async () => {
    try {
      setNavigation('step2');
    } catch (errorInfo) {}
  };

  const handleSubmitVerification = async () => {
    try {
      const otp = digits.join('');
      if (otp.length != digits.length) {
        modalState.openModal();
      }
      if (navigation == 'step3' && otp.length === digits.length) {
        route.push('/reset-password');
      }
    } catch (error) {}
  };

  const handleChange = (index: number, value: string) => {
    const updateDigit = [...digits];
    updateDigit[index] = value;
    setDigits(updateDigit);
  };

  useEffect(() => {
    const otp = digits.join('');
    if (otp.length === digits.length) {
      setNavigation('step3');
    }
    if (navigation === 'step3' && otp.length != digits.length) {
      setNavigation('step3_changeOTP');
    }
  }, [digits, navigation, setNavigation]);

  return (
    <>
      <Modal
        wrapClassName="modalWrap"
        closeIcon={false}
        width={'25%'}
        open={modalState.visible}
        onCancel={modalState.closeModal}
        footer={null}
        centered={true}
      >
        <S.ModalContent>
          <Image
            alt=""
            src={'/images/forgot-password/Modal.png'}
            width={100}
            height={100}
          />
          <Typography variant="body-text-bold">
            Một mã xác thực gồm 4 chữ số đã được gửi tới số điện thoại *******70
          </Typography>
        </S.ModalContent>
      </Modal>
      {navigation === 'step1' ? (
        <S.Input>
          <Form form={form} onFinish={handleSubmit}>
            <FormItem
              name="phone"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
              ]}
            >
              <Input
                width={'100%'}
                prefix={
                  <>
                    <Dropdown overlay={menu} placement="bottomLeft">
                      <Space>
                        <Button $full={false} $backgroundColor="#F5F7FA">
                          <Image
                            alt=""
                            src={selectedCountry.flag}
                            width={25}
                            height={20}
                          />
                          <CaretDownOutlined />
                        </Button>
                      </Space>
                    </Dropdown>
                    <Typography>{selectedCountry.code}</Typography>
                  </>
                }
              />
            </FormItem>

            <FormItem>
              <Button
                $borderRadius="0px"
                $backgroundColor="#829d8a"
                $width={'100%'}
                type="primary"
                htmlType="submit"
                className="submit-button"
              >
                Gửi mã OTP
              </Button>
            </FormItem>
          </Form>
        </S.Input>
      ) : (
        <>
          <S.Input>
            <Form form={form} onFinish={handleSubmitVerification}>
              <S.InputNumber>
                {digits.map((digit: string, index: number) => (
                  <FormItem key={index} name={`OTP${index + 1}`}>
                    <InputNumber
                      className={navigation != 'step3' ? '' : 'inputBlock'}
                      min={0}
                      max={9}
                      value={digit}
                      onChange={(e: any) => {
                        handleChange(index, e);
                      }}
                    />
                  </FormItem>
                ))}
              </S.InputNumber>
              {navigation === 'step3' || navigation === 'step3_changeOTP' ? (
                <S.CountdownContainer>
                  <Typography>
                    Không nhận được mã xác thực?
                    <a className="resend">Gửi lại</a>
                  </Typography>
                </S.CountdownContainer>
              ) : (
                <S.CountdownContainer>
                  <Countdown
                    onFinish={() => {
                      setNavigation('step3_changeOTP');
                    }}
                    className="countdown-item"
                    format="mm:ss"
                    value={Date.now() + 60 * 1000}
                  />
                  <Typography>
                    Không nhận được mã xác thực?
                    <a className="resend">Gửi lại</a>
                  </Typography>
                </S.CountdownContainer>
              )}
              <FormItem>
                <Button
                  $borderRadius="0px"
                  $backgroundColor={
                    navigation === 'step3' ? 'rgba(71, 108, 94, 1)' : '#98ad9e'
                  }
                  $width={'100%'}
                  type="primary"
                  htmlType="submit"
                  className="submit-button"
                >
                  Xác thực
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
