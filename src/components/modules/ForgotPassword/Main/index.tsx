'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import OTPMail from '../OTPMail';
import Typography from '@/components/core/common/Typography';
import { PhoneOutlined } from '@ant-design/icons';

import * as S from './styles';
export interface Props {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

function ForgotPassword() {
  const [navigation, setNavigation] = useState<string>('step1');

  return (
    <S.HomeWrapper>
      <OTPMail navigation={navigation} setNavigation={setNavigation} />
      <Typography padding="0px 0px 24px 0px">
        Try another way to verification
      </Typography>
      <PhoneOutlined />
    </S.HomeWrapper>
  );
}

export default ForgotPassword;
