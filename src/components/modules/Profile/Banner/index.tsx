import React from 'react';
import * as S from './style';
import PrestigeIcon from '../PrestigeIcon';
export default function Banner() {
  return (
    <>
      <S.Header>
        <S.Wrapper>
          <S.CoverImage src={'/images/Profile/CoverPhoto.jpg'} />
          <S.BannerUser>
            <S.Avatar>
              <S.UserAvatar src={'/images/Profile/avatarUser.jpg'} />
            </S.Avatar>
            <S.BoxUser>
              <S.Name>Trần Văn Bảo Thắng</S.Name>
              <S.Prestige>
                <S.Icon>
                  <PrestigeIcon></PrestigeIcon>
                </S.Icon>
                <S.PrestigeScore>100 Uy tín</S.PrestigeScore>
              </S.Prestige>
            </S.BoxUser>
          </S.BannerUser>
        </S.Wrapper>
      </S.Header>
    </>
  );
}
