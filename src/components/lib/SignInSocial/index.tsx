"use client";

import { Flex } from 'antd'

import Typography from '@/components/core/common/Typography';

import * as S from './styles';

function SignInSocial() {
    return (
        <Flex vertical gap={'10px'} align='center' >
            <Typography>
                Đăng nhập bằng
            </Typography>
            <Flex gap={40}>
                <S.ButtonLogo>
                    <S.ImgLogo preview={false} alt="" src={'/images/signin/logo-facebook.png'} />
                </S.ButtonLogo>
                <S.ButtonLogo>
                    <S.ImgLogo preview={false} alt="" src={'/images/signin/logo-gg.png'} />
                </S.ButtonLogo>
            </Flex>
        </Flex>
    )
}

export default SignInSocial