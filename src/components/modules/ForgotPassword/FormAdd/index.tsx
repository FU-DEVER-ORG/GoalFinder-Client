'use client';

import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Form, Menu, Space, Statistic, Dropdown, message } from 'antd';
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Modal from 'antd/es/modal/Modal';
import { CaretDownOutlined } from '@ant-design/icons';

import useModal from '@/hooks/useModal';

import Button from '@/components/core/common/Button';
import Input from '@/components/core/common/form/Input';
import Typography from '@/components/core/common/Typography';

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
  const [messageApi, contextHolder] = message.useMessage();

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

  const [digits, setDigits] = useState<string[]>([]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [targetTime, setTargetTime] = useState<number>(Date.now() + 30 * 1000);

  const [finish, setFinish] = useState<boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState<any>(phoneAreaData[0]);

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
      setTargetTime(Date.now() + 30 * 1000);
    } catch (errorInfo) {}
  };

  const handleSubmitVerification = async () => {
    try {
      if (digits.length != 4) {
        modalState.openModal();
      }
      if (navigation == 'step3' && digits.length === 4) {
        route.push('/reset-password');
      }
    } catch (error) {}
  };

  const handleChange = (otp: string, index: number) => {
    setDigits(otp.split(''));
    setSelectedIndex(index);
  };

  const onFinish = () => {
    setFinish(true);
  };

  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Mã xác thực đang được gửi tới bạn',
        duration: 1,
      })
      .then(() => message.success('Mã xác thực đã được gửi', 2.5))
      .then(() => setFinish(false))
      .then(() => setTargetTime(Date.now() + 30 * 1000));
  };

  const renderInput = (inputProps: InputHTMLAttributes<HTMLInputElement>) => (
    <input
      {...inputProps}
      onKeyPress={(e) => {
        const isValidKey = /^\d$/.test(e.key);
        if (!isValidKey) {
          e.preventDefault();
        }
      }}
      inputMode="numeric"
      autoComplete="off"
    />
  );

  useEffect(() => {
    if (finish) setNavigation('step3_changeOTP');
    navigation === 'step1'
      ? setNavigation('step1')
      : digits.length === 4
      ? setNavigation('step3')
      : finish === false
      ? setNavigation('step2')
      : setNavigation('step3_changeOTP');
  }, [digits, finish, navigation, setNavigation]);

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
                <OTPInput
                  value={digits.join('')}
                  onChange={(otp: string) => handleChange(otp, selectedIndex)}
                  inputStyle={{
                    overflow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  inputType="text"
                  numInputs={4}
                  renderSeparator={<span style={{ padding: '5px' }}></span>}
                  renderInput={renderInput}
                />
              </S.InputNumber>

              {navigation === 'step3' || navigation === 'step3_changeOTP' ? (
                <S.CountdownContainer>
                  <Typography className="resendWrapper">
                    Không nhận được mã xác thực?
                    {contextHolder}
                    <a className="resend" onClick={success}>
                      Gửi lại
                    </a>
                  </Typography>
                </S.CountdownContainer>
              ) : (
                <S.CountdownContainer>
                  <Countdown
                    onFinish={onFinish}
                    className="countdown-item"
                    format="mm:ss"
                    value={targetTime}
                  />

                  <Typography className="resendWrapper">
                    Không nhận được mã xác thực?
                    {contextHolder}
                    <a className="resend" onClick={success}>
                      Gửi lại
                    </a>
                  </Typography>
                </S.CountdownContainer>
              )}

              <FormItem>
                <Button
                  $backgroundColor={
                    navigation === 'step3' ? '#0F6C19' : '#4DAA57'
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
