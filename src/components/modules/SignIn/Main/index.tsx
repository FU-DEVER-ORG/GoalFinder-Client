'use client';

import Title from 'antd/es/typography/Title';

import FormSignin from '@/components/modules/SignIn/FormSignin';
import SignInSocial from '@/components/lib/SignInSocial';

import * as S from './styles';

function SignIn() {
    return (
        <S.HomeWrapper>
            <Title level={2}>Đăng nhập</Title>
            <FormSignin/>
            <SignInSocial/>
        </S.HomeWrapper>
    )
}

export default SignIn
