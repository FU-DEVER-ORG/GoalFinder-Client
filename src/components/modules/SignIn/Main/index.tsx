'use client';

import Typography from '@/components/core/common/Typography';
import * as S from './styles';

import React from 'react'
import FormSignin from '../FormSignin';
import { Button, Flex } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLogin } from '../FormSignin/styles';

function SignIn() {
    return (
        <S.HomeWrapper>
            <S.TitleLogin level={2}>Đăng nhập</S.TitleLogin>
            <FormSignin></FormSignin>
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

export default SignIn
