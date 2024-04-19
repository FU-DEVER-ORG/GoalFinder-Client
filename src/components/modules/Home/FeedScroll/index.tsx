'use client';

import Feed from '../Feed';

import * as S from './styles';

function FeedScroll() {
  return (
    <S.Scroll flex={1} vertical gap={24}>
      {Array(20).fill(<Feed />)}
    </S.Scroll>
  );
}

export default FeedScroll;
