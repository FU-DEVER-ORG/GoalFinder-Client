'use client';

import FormReset from '../FormReset';
import Title from 'antd/es/typography/Title';

import * as S from './styles';

function ResetPassword() {
  return (
    <S.HomeWrapper>
      <Title level={2}>Đặt lại mật khẩu</Title>
      <FormReset />
    </S.HomeWrapper>
  );
}

export default ResetPassword;
