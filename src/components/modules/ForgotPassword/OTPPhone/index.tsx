'use client';

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { MailOutlined } from '@ant-design/icons';

import Typography from '@/components/core/common/Typography';
import FormPhone from '../FormPhone';

import * as S from './styles';
interface PageProps {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

function OTPPhone(props: PageProps) {
  return (
    <S.AddMailWrapper>
      <Typography variant="h3">Phone Verification</Typography>
      <S.ImgLogo>
        <Image
          alt=""
          src={'/images/forgot-password/logo_phone.png'}
          width={200}
          height={150}
        />
      </S.ImgLogo>
      <S.TypographyWrapper>
        {props.navigation === 'step1-phone' ? (
          <>
            <Typography variant="h5">Enter your phone number</Typography>
            <Typography style="italic">
              Enter your phone number in order to send you your OTP security
              code
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5">Phone verification</Typography>
            <Typography style="italic">
              A OTP code has been sent to ****987, please fill the form
            </Typography>
          </>
        )}
      </S.TypographyWrapper>
      <FormPhone
        navigation={props.navigation}
        setNavigation={props.setNavigation}
      />
      <Typography>Try another way to verification</Typography>
      <MailOutlined onClick={() => props.setNavigation('step1-mail')} />
    </S.AddMailWrapper>
  );
}

export default OTPPhone;
