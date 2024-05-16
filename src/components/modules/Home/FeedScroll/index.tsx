'use client';

import { Skeleton } from 'antd';

import Feed from '../Feed';

import { useGetMatchQuery } from '@/store/services/auth';
import { MenuItem } from '@/model/entites/Feed';

import * as S from './styles';

function FeedScroll() {
  const { posts = [], isLoading } = useGetMatchQuery(undefined, {
    selectFromResult: ({ data }) => ({
      posts: data?.body?.footballMatches || [],
      isLoading: !data,
    }),
  });
  return (
    <S.Scroll vertical gap={24}>
      {isLoading ? (
        <S.FeedContainer>
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </S.FeedContainer>
      ) : (
        posts.map((post: MenuItem) => (
          <Feed key={post.id} data={post} />
        ))
      )}
    </S.Scroll>
  );
}

export default FeedScroll;
