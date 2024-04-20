'use client';

import Input from '@/components/core/common/form/Input';
import * as S from './styles';
import Image from 'next/image';
import { MailOutlined } from '@ant-design/icons';
import Typography from '@/components/core/common/Typography';
import Button from '@/components/core/common/Button';
function AddMail() {
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
        <Typography variant="h5">Add your gmail</Typography>
        <Typography style="italic">
          Enter your gmail in order to send you your OTP security code
        </Typography>
      </S.TypographyWrapper>
      <S.Input>
        <Input
          width={'100%'}
          placeholder="******@gmail.com"
          prefix={<MailOutlined />}
        />
      </S.Input>

      <Button $width="100% " type="default">
        Send OTP
      </Button>
    </S.AddMailWrapper>
  );
}

export default AddMail;
