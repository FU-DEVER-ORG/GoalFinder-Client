'use client';
import { Fragment } from 'react';

import { useGetProfileQuery } from '@/store/services/user';
import MainLayout from '@/components/core/layouts/MainLayout';
import Banner from '@/components/modules/Profile/Banner';
import Left from '@/components/modules/Profile/Left';
import Right from '@/components/modules/Profile/Right';
import Loading from '../Loading/loading';

import * as S from './style';

interface Param {
  params: { nickname: string };
}
export default function Main({ params }: Param) {
  const { data, isFetching } = useGetProfileQuery(params.nickname);
  // console.log('data', data);

  const userName = `${data?.body.userDetail.firstName || ''} ${
    data?.body.userDetail.lastName || ''
  }`;

  return (
    <>
      {isFetching ? (
        <>
          <Loading />
        </>
      ) : (
        <Fragment>
          <MainLayout>
            <Banner
              userName={userName}
              avatarUrl={data?.body.userDetail.avatarUrl || ''}
              backgroundUrl={data?.body.userDetail.backgroundUrl || ''}
              prestigeScore={data?.body.userDetail.prestigeScore || ''}
            />
          </MainLayout>
          <S.Container>
            <S.Body>
              <Left userDetail={data?.body.userDetail || ''} />
              <Right
                footballMatch={data?.body.footballMatches || ''}
                userName={userName}
              />
            </S.Body>
          </S.Container>
        </Fragment>
      )}
    </>
  );
}
