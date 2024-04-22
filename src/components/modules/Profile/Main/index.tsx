'use client';
import MainLayout from '@/components/core/layouts/MainLayout';
import Left from '../Left';
import Right from '../Right';
import Banner from '../Banner';
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
