'use client';

import MainLayout from '@/components/core/layouts/MainLayout';
import Banner from '@/components/modules/Profile/Banner';
import Left from '@/components/modules/Profile/Left';
import Right from '@/components/modules/Profile/Right';

import * as S from './style';

export default function Profile() {
  return (
    <>
      <MainLayout>
        <Banner />
        <S.Container>
          <S.Body>
            <Left />
            <Right />
          </S.Body>
        </S.Container>
      </MainLayout>
    </>
  );
}
