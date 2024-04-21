'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import OTPMail from '../OTPMail';
import OTPPhone from '../OTPPhone';

import * as S from './styles';
export interface Props {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}

function ForgotPassword() {
  const [navigation, setNavigation] = useState<string>('step1-mail');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (navigation === 'step1-mail' || navigation === 'step2-mail') {
      setTitle('Mail');
    } else {
      setTitle('Phone');
    }
  }, [navigation]);
  return (
    <S.HomeWrapper>
      {title === 'Mail' ? (
        <OTPMail navigation={navigation} setNavigation={setNavigation} />
      ) : (
        <OTPPhone navigation={navigation} setNavigation={setNavigation} />
      )}
    </S.HomeWrapper>
  );
}

export default ForgotPassword;
