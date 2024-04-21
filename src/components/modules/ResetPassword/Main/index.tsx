'use client';

import Typography from '@/components/core/common/Typography';
import FormReset from '../FormReset';

import * as S from './styles';

function ResetPassword() {
  return (
    <S.HomeWrapper>
      <Typography variant="h2">Set new password</Typography>
      <FormReset />
    </S.HomeWrapper>
  );
}

export default ResetPassword;
