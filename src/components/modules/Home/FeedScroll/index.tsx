'use client';

import { useEffect, useState } from 'react';

import { useGetMatchQuery } from '@/store/services/auth';

import Feed from '../Feed';
import * as S from './styles';

function FeedScroll() {
  const { data, isLoading } = useGetMatchQuery("");
  const [items, setItems] = useState([]);
  console.log(data);
  
  useEffect(() => {
    if (data) {
      setItems(data.body.footballMatches);
    }
  },[data]);

  return (
    <S.Scroll vertical gap={24}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        items.map((item, index) => (
          <Feed key={index} data={item} />
        ))
      )}
    </S.Scroll>
  );
}

export default FeedScroll;
