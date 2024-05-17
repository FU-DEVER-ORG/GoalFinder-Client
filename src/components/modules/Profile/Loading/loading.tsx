import { Skeleton } from 'antd';

import * as S from './styled';

const Loading: React.FC = () => {
  const active: boolean = true;

  return (
    <>
      <S.LoadingPage>
        <S.Wrapper>
          <S.coverImgLoading />
          <Skeleton avatar paragraph={{ rows: 6 }} active={active} />
        </S.Wrapper>
      </S.LoadingPage>
    </>
  );
};

export default Loading;
