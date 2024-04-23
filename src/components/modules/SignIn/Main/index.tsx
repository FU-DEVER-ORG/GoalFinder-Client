'use client';

import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';

import Typography from '@/components/core/common/Typography';
import FormSignin from '@/components/modules/SignIn/FormSignin';

import * as S from './styles';

function SignIn() {
    return (
        <S.HomeWrapper>
            <Title level={2}>Đăng nhập</Title>
            <FormSignin/>
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
        </S.HomeWrapper>
    )
}

export default SignIn
