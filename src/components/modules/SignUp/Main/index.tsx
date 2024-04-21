'use client';

import Typography from '@/components/core/common/Typography';
import * as S from './styles';

import React from 'react'
import { Flex } from 'antd';
import FormSignUp from '../FormSignUp';

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
