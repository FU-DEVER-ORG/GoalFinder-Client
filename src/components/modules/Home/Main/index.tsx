'use client';

import { Flex } from 'antd';

import UserInfo from '../UserInfo';
import Nav from '../Nav';
import YourMatch from '../YourMatch';
import FeedScroll from '../FeedScroll';
import Button from '@/components/core/common/Button';

import * as S from './styles';
import { getUserSession } from '@/lib/auth/session';

async function Home() {
  const user = await getUserSession();
  return (
    <S.HomeWrapper gap={24}>
      <S.Left vertical gap={24}>
        {JSON.stringify(user)}
        <UserInfo />
        <Nav />
        <Button type="primary" $width={'100%'}>
          TẠO KÈO NGAY
        </Button>
      </S.Left>
      <FeedScroll />
      <S.Right vertical gap={24}>
        <YourMatch />
      </S.Right>
    </S.HomeWrapper>
  );
}

export default Home;
