'use client';

import * as S from './styles';
import { PhoneOutlined } from '@ant-design/icons';
import Typography from '@/components/core/common/Typography';
import AddMail from '../AddMail';
function Forgot_Password() {
  return (
    <S.HomeWrapper>
      <AddMail />
      <Typography>Try another way to verification</Typography>
      <PhoneOutlined />
    </S.HomeWrapper>
  );
}

export default Forgot_Password;
