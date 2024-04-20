'use client';

import * as S from './styles';
import { PhoneOutlined } from '@ant-design/icons';
import Typography from '@/components/core/common/Typography';
import OTPMail from '../OTPMail';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
export interface IProps {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}
function Forgot_Password() {
  const [navigation, setNavigation] = useState('step1');

  return (
    <S.HomeWrapper>
      <OTPMail navigation={navigation} setNavigation={setNavigation} />
      <Typography padding="0px 0px 24px 0px">
        Try another way to verification
      </Typography>
      {/* <Link href={'phone'}> */}
      <PhoneOutlined />
      {/* </Link> */}
    </S.HomeWrapper>
  );
}

export default Forgot_Password;
