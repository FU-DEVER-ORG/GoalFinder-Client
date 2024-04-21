'use client';

import { Flex } from 'antd';

import Typography from '@/components/core/common/Typography';
import FormSignin from '@/components/modules/SignIn/FormSignin';

import * as S from './styles';

function SignIn() {
    return (
        <S.HomeWrapper>
            <S.TitleLogin level={2}>Đăng nhập</S.TitleLogin>
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
