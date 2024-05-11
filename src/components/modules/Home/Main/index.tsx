'use client';

import UserInfo from '../UserInfo';
import Nav from '../Nav';
import YourMatch from '../YourMatch';
import FeedScroll from '../FeedScroll';
import Button from '@/components/core/common/Button';

import * as S from './styles';

function Home() {
  return (
    <S.HomeWrapper gap={24}>
      <S.Left vertical gap={24}>
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
