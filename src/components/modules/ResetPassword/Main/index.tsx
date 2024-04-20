'use client';

import * as S from './styles';
import Typography from '@/components/core/common/Typography';
import { Dispatch, SetStateAction, useState } from 'react';
import { FormReset } from '../FormReset';
export interface IProps {
  navigation: string;
  setNavigation: Dispatch<SetStateAction<string>>;
}
function Reset_Password() {
  const [navigation, setNavigation] = useState('step1');
  return (
    <S.HomeWrapper>
      <Typography variant="h2">Set new password</Typography>
      <FormReset />
    </S.HomeWrapper>
  );
}

export default Reset_Password;
