'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';

import Feed from '../Feed';

import { useGetMatchQuery } from '@/store/services/auth';

import * as S from './styles';
import { MenuItem } from '@/model/entites/Feed';

function FeedScroll() {
  const { data : posts, isLoading } = useGetMatchQuery("") ;
  const [items, setItems] = useState<MenuItem[]>([]);
  return (
    <S.Scroll vertical gap={24}>
      {isLoading ? (
        <S.FeedContainer>
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </S.FeedContainer>
      ) : (
        posts?.items?.map((post : any) => (
          <Feed key={post.id} data={post} />
        ))
      )}
    </S.Scroll>
  );
}

export default FeedScroll;
