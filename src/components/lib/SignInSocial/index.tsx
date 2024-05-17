"use client";

import { Flex } from 'antd'

import Typography from '@/components/core/common/Typography';

import { signIn } from 'next-auth/react';

import * as S from './styles';

function SignInSocial() {
    const handleClick = async () => {
        try {
            await signIn('google', { callbackUrl: '/' });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Flex vertical gap={'10px'} align='center' >
            <Typography>
                Đăng nhập bằng
            </Typography>
            <Flex gap={40}>
                <S.ButtonLogo >
                    <S.ImgLogo preview={false} alt="" src={'/images/signin/logo-facebook.png'} />
                </S.ButtonLogo>
                <S.ButtonLogo onClick={handleClick}>
                    <S.ImgLogo preview={false} alt="" src={'/images/signin/logo-gg.png'} />
                </S.ButtonLogo>
            </Flex>
        </Flex>
    )
}

export default SignInSocial