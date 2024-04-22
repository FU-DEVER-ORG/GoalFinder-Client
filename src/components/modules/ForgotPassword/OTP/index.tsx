'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';

import Typography from '@/components/core/common/Typography';
import FormAdd from '../FormAdd';

import * as S from './styles';

export interface Props {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

function OTP() {
  const [navigation, setNavigation] = useState<string>('step1');
  return (
    <S.AddMailWrapper>
      <Typography variant="h2">Xác thực tài khoản</Typography>
      {navigation != 'step3' ? (
        <S.ImgLogo>
          <Image
            alt=""
            src={'/images/forgot-password/Verification.svg'}
            width={150}
            height={150}
          />
        </S.ImgLogo>
      ) : (
        <S.ImgLogo>
          <Image
            alt=""
            src={'/images/forgot-password/Step3.svg'}
            width={150}
            height={150}
          />
        </S.ImgLogo>
      )}
      <S.TypographyWrapper>
        {navigation === 'step1' ? (
          <>
            <Typography variant="h5">Nhập số điện thoại</Typography>
          </>
        ) : (
          <>
            <Typography padding="0px 0px 20px 0px" variant="h5">
              Mã xác thực OTP
            </Typography>
            <Typography>
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
