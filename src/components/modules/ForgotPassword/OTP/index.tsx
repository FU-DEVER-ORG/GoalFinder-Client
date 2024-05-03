'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';

import Typography from '@/components/core/common/Typography';
import FormAdd from '../FormAdd';
import Title from 'antd/es/typography/Title';

import * as S from './styles';

export interface Props {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

function OTP() {
  const [navigation, setNavigation] = useState<string>('step1');

  return (
    <S.AddMailWrapper>
      <Title level={2}>Xác thực tài khoản</Title>
      <S.ImgLogo>
        <Image
          alt=""
          src={'/images/forgot-password/Verification.svg'}
          width={150}
          height={150}
          priority
        />
      </S.ImgLogo>
      <S.TypographyWrapper>
        {navigation === 'step1' ? (
          <Title level={5}>Nhập số điện thoại</Title>
        ) : (
          <>
            <Title level={5}>Mã xác thực OTP</Title>

            <Typography align="center">
              Một mã xác thực OTP được gửi tới số điện thoại ***** ***70, vui
              lòng kiểm tra
            </Typography>
          </>
        )}
      </S.TypographyWrapper>
      <FormAdd navigation={navigation} setNavigation={setNavigation} />
    </S.AddMailWrapper>
  );
}

export default OTP;
