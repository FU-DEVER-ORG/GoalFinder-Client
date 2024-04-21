'use client';

import React, { Dispatch, SetStateAction } from 'react';

import Typography from '@/components/core/common/Typography';
import Image from 'next/image';
import FormAdd from '../FormAdd';

import * as S from './styles';
interface PageProps {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

function OTPMail(props: PageProps) {
  return (
    <S.AddMailWrapper>
      <Typography variant="h3">E-mail Verification</Typography>
      <S.ImgLogo>
        <Image
          alt=""
          src={'/images/forgot-password/logo.png'}
          width={150}
          height={150}
        />
      </S.ImgLogo>
      <S.TypographyWrapper>
        {props.navigation === 'step1' ? (
          <>
            <Typography variant="h5">Add your gmail</Typography>
            <Typography style="italic">
              Enter your gmail in order to send you your OTP security code
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5">Gmail verification</Typography>
            <Typography style="italic">
              A OTP code has been sent to ****@gmail.com, please fill the form
            </Typography>
          </>
        )}
      </S.TypographyWrapper>
      <FormAdd
        navigation={props.navigation}
        setNavigation={props.setNavigation}
      />
    </S.AddMailWrapper>
  );
}

export default OTPMail;
