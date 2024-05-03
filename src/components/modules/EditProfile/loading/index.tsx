import React from 'react';

import * as S from './style';
const index = ({
  $isLoading,
  $fixed = false,
}: {
  $isLoading: boolean;
  $fixed?: boolean;
}) => {
  return (
    <S.Wrapper $isLoading={$isLoading} $fixed={$fixed}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Wrapper>
  );
};

export default index;
