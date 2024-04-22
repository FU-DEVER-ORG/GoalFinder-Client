import React from 'react';
import * as S from './style';
import ChangeAvt from './icon';
export default function Banner() {
  return (
    <>
      <S.Header>
        <S.Wrapper>
          <S.CoverImage src={'/images/Profile/CoverPhoto.jpg'} />
          <S.BannerUser>
            <S.Avatar>
              <S.UserAvatar src={'/images/Profile/avatarUser.jpg'} />
              <ChangeAvt />
            </S.Avatar>
            <S.BoxUser>
              <S.Name>Trần Văn Bảo Thắng</S.Name>
              <S.Prestige>100 Uy tín</S.Prestige>
            </S.BoxUser>
          </S.BannerUser>
        </S.Wrapper>
      </S.Header>
    </>
  );
}
