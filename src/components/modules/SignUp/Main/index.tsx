'use client';

import Title from 'antd/es/typography/Title';

import FormSignUp from '@/components/modules/SignUp/FormSignUp';
import SignInSocial from '@/components/lib/SignInSocial';

import * as S from './styles';
function SignUp() {
    return (
        <S.HomeWrapper>
            <Title level={2}>Đăng ký</Title>
            <FormSignUp/>
            <SignInSocial/>
        </S.HomeWrapper>
    )
}

export default SignUp
