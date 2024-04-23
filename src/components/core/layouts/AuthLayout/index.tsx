'use client';

import Image from 'next/image';
import { Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Input from '@/components/core/common/form/Input';
import Button from '@/components/core/common/Button';

import logo from '@/public/icon/layout/logo.svg';

import * as S from './styles';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <S.LayoutWrapper>
      <S.Header>
        <S.Container>
          <S.ImageWrapper>
            <Image src={logo} alt="" fill sizes="auto" />
          </S.ImageWrapper>
          <S.InputWrap>
            <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
          </S.InputWrap>
          <Flex gap={20}>
            <Button type='default'>Đăng ký</Button>
            <Button type='primary'>Đăng nhập</Button>
          </Flex>
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default AuthLayout;
