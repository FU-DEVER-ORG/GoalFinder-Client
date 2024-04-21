'use client';

import { Flex } from 'antd';

import Typography from '@/components/core/common/Typography';
import FormSignUp from '@/components/modules/SignUp/FormSignUp';

import * as S from './styles';
import Title from 'antd/es/typography/Title';

function SignUp() {
    return (
        <S.HomeWrapper>
            <Title level={2}>Đăng ký</Title>
            <FormSignUp/>
            <Typography>
                Or Login With
            </Typography>
            <Flex gap={20}>
                <S.ButtonLogo>
                    <S.ImgLogo preview={false} alt="" src={'/images/signin/logo-facebook.png'} />
                </S.ButtonLogo>
                <S.ButtonLogo>
                    <S.ImgLogo preview={false} alt="" src={'/images/signin/logo-gg.png'} />
                </S.ButtonLogo>
            </Flex>
        </S.HomeWrapper>
    )
}

export default SignUp
