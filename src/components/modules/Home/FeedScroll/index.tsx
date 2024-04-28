'use client';

import Feed from '../Feed';

import * as S from './styles';

function FeedScroll() {
  return (
    <S.Scroll flex={1} vertical gap={24}>
      {Array.from({length:20}, (_,index) =>(
        <Feed key={index}/>
      ))}
    </S.Scroll>
  );
}

export default FeedScroll;
