'use client';

import { Flex } from 'antd';

import Typography from '@/components/core/common/Typography';
import FormSignin from '@/components/modules/SignIn/FormSignin';

import * as S from './styles';
import Title from 'antd/es/typography/Title';

function SignIn() {
    return (
        <S.HomeWrapper>
            <Title level={2}>Đăng nhập</Title>
            <FormSignin></FormSignin>
            <Typography>
                Or Login With
            </Typography>
            <Flex gap={40}>
                <S.ButtonLogo>
                    <S.ImgLogo alt="" src={'/images/signin/logo-facebook.png'} />
                </S.ButtonLogo>
                <S.ButtonLogo>
                    <S.ImgLogo alt="" src={'/images/signin/logo-gg.png'} />
                </S.ButtonLogo>
            </Flex>
        </S.HomeWrapper>
    )
}

export default SignIn
