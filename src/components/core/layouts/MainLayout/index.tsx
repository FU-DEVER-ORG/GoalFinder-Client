'use client';

import React from 'react';
import Image from 'next/image';
import {
  MehFilled,
  BellFilled,
  CaretDownFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';

import logo from '@/public/icon/layout/logo.svg';

import Input from '@/components/core/common/form/Input';

import * as S from './styles';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
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
          <Flex gap={16}>
            <S.Circle justify="center" align="center">
              <MehFilled />
              <S.Badge justify="center" align="center">
                9
              </S.Badge>
            </S.Circle>
            <S.Circle justify="center" align="center">
              <BellFilled twoToneColor="#fff" />
              <S.Badge justify="center" align="center">
                19
              </S.Badge>
            </S.Circle>
            <S.Avatar>
              <Image
                alt=""
                src={'/images/layout/avatar.jpeg'}
                width={40}
                height={40}
              />
              <S.Down justify="center" align="center">
                <CaretDownFilled size={6} />
              </S.Down>
            </S.Avatar>
          </Flex>
        </S.Container>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.LayoutWrapper>
  );
}

export default MainLayout;
