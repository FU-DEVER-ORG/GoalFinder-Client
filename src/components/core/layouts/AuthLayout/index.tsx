'use client';

import React from 'react';
import Image from 'next/image';
import {
  MehFilled,
  BellFilled,
  CaretDownFilled,
  SearchOutlined,
} from '@ant-design/icons';
import logo from '@/public/icon/layout/logo.svg';
import { Flex } from 'antd';
import Input from '../../common/form/Input';

import * as S from './styles';
import Button from '../../common/Button';

interface MainLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: MainLayoutProps) {
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
            <Button type="default">Đăng ký</Button>
            <Button type="primary">Đăng nhập</Button>
          </Flex>
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default AuthLayout;
