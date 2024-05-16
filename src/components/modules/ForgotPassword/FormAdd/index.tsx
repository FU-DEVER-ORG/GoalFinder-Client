'use client';

import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  Form,
  Menu,
  Space,
  Statistic,
  Dropdown,
  message,
  FormProps,
} from 'antd';
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CaretDownOutlined } from '@ant-design/icons';

import { useForgotPasswordMutation } from '@/store/services/auth';

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
  const [messageApi, contextHolder] = message.useMessage();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

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

  type FieldType = {
    userName?: string;
  };
  const [dataForgot, setDataForgot] = useState<{
    userName: string;
  }>({ userName: '' });

  const [digits, setDigits] = useState<string[]>([]);
  const [otpCode, setOtpCode] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [targetTime, setTargetTime] = useState<number>(Date.now() + 60 * 1000);

  const [finish, setFinish] = useState<boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState<{
    country: string;
    code: string;
    flag: string;
  }>(phoneAreaData[0]);

  const menu = (
    <Menu onClick={handleMenuClick}>
      {phoneAreaData.map((area) => (
        <Menu.Item key={area?.code}>
          <S.InputMenu key={area?.code}>
            <Typography>{area?.country}</Typography>
            <Image alt="" src={area?.flag} width={25} height={20} priority />
          </S.InputMenu>
        </Menu.Item>
      ))}
    </Menu>
  );

  function handleMenuClick(e: any): void {
    const clickedCountry = phoneAreaData.find((area) => area?.code === e?.key);
    if (clickedCountry) {
      setSelectedCountry(clickedCountry);
    }
  }

  const handleSubmit: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const data = {
        userName: values?.userName!,
      };
      setDataForgot(data);
      const payload = await forgotPassword(data).unwrap();
      setNavigation('step2');
      setTargetTime(Date.now() + 60 * 1000);
      console.log('Mã xác thực là: ', payload?.body?.otpCode);
      setOtpCode(payload?.body?.otpCode);
    } catch (error) {
      console.error('rejected', error);
    }
  };

  const handleSubmitVerification = async () => {
    try {
      if (digits?.length != 4) {
        form.setFields([
          {
            name: 'otp',
            errors: ['OTP gồm 4 chữ cái, vui lòng kiểm tra lại'],
          },
        ]);
        setTimeout(() => {
          form.setFields([
            {
              name: 'otp',
              errors: [],
            },
          ]);
        }, 3000);
      }
      if (navigation === 'step3' && digits?.length === 4) {
        const otpCheck = digits?.join('');
        otpCode === otpCheck
          ? (sessionStorage.setItem('otpCode', otpCode),
            route.push('/reset-password'))
          : messageApi.open({
              type: 'error',
              content: 'Mã xác thực không đúng, vui lòng kiểm tra lại',
            });
      }
    } catch (error) {}
  };

  const handleChange = (otp: string, index: number) => {
    setDigits(otp?.split(''));
    setSelectedIndex(index);
  };

  const onFinish = () => {
    setFinish(true);
    setDigits(otpCode?.split(''));
  };

  const resend = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Mã xác thực đang được gửi tới bạn',
        duration: 1,
      })
      .then(() => message.success('Mã xác thực đã được gửi', 1))
      .then(async () => {
        try {
          const payload = await forgotPassword(dataForgot).unwrap();

          console.log('Mã xác thực OTP là: ', payload?.body?.otpCode),
            setDigits([]),
            setOtpCode(payload?.body?.otpCode);
        } catch (error) {
          messageApi.open({
            type: 'error',
            content: 'Lỗi xác thực',
          });
        }
      })
      .then(() => setFinish(false))
      .then(() => setTargetTime(Date.now() + 60 * 1000));
  };

  const renderInput = (inputProps: InputHTMLAttributes<HTMLInputElement>) => (
    <input {...inputProps} inputMode="text" autoComplete="off" />
  );

  useEffect(() => {
    if (finish) setNavigation('step3_changeOTP');
    navigation === 'step1'
      ? setNavigation('step1')
      : digits?.length === 4
      ? setNavigation('step3')
      : finish === false
      ? setNavigation('step2')
      : setNavigation('step3_changeOTP');
  }, [digits, finish, navigation, setNavigation]);

  return (
    <>
      {contextHolder}

      {navigation === 'step1' ? (
        <S.Input>
          <Form form={form} onFinish={handleSubmit} style={{ width: '400px' }}>
            <FormItem
              name="userName"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
              ]}
            >
              <Input
                prefix={
                  <>
                    <Dropdown overlay={menu} placement="bottomLeft">
                      <Space style={{ width: '60px', marginLeft: '-10px' }}>
                        <Button $full={false} $width={'-webkit-fill-available'}>
                          <Image
                            alt=""
                            src={selectedCountry.flag}
                            width={20}
                            height={15}
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
                loading={isLoading}
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
              <FormItem name="otp">
                <S.InputNumber>
                  <OTPInput
                    value={digits?.join('')}
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
              </FormItem>
              {navigation === 'step3' || navigation === 'step3_changeOTP' ? (
                <S.CountdownContainer>
                  <Typography className="resendWrapper">
                    Không nhận được mã xác thực?
                    <a className="resend" onClick={resend}>
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
                    <a className="resend" onClick={resend}>
                      Gửi lại
                    </a>
                  </Typography>
                </S.CountdownContainer>
              )}

              <FormItem>
                <Button
                  $width={'100%'}
                  type="primary"
                  htmlType="submit"
                  className="submit-button"
                  loading={isLoading}
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
