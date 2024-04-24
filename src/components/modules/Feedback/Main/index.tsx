'use client';

import FormRating from '../FormRating';
import MatchDescription from '../MatchDescription';

import * as S from './styles';

function Feedback() {
  return (
    <S.FeedbackWrapper>
      <S.ContentWrapper>
        <S.RatingHeader>Đánh giá kèo của bạn</S.RatingHeader>
        <S.CustomHR />
        <MatchDescription />
        <FormRating />
      </S.ContentWrapper>
    </S.FeedbackWrapper>
  );
}
export default Feedback;
