'use client';

import { Flex } from 'antd';

import React from 'react'
import Typography from '@/components/core/common/Typography';
import FormSignUp from '@/components/modules/SignUp/FormSignUp';

import * as S from './styles';

function SignUp() {
    return (
        <S.HomeWrapper>
            <S.TitleLogin level={2}>Đăng ký</S.TitleLogin>
            <FormSignUp></FormSignUp>
            <Typography>
                Or Login With
            </Typography>
            <Flex gap={20}>
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

export default SignUp
