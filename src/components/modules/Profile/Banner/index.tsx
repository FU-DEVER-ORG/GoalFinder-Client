import Image from 'next/image';

import pretigeIcon from '@/public/icon/match-propertiesIcon/prestigeIcon.svg';

import * as S from './style';

export default function Banner() {
  return (
    <>
      <S.Header>
        <S.HeaderMain>
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
                    <Image src={pretigeIcon} alt="" fill sizes="auto"></Image>
                  </S.Icon>
                  <S.PrestigeScore>100 Uy tín</S.PrestigeScore>
                </S.Prestige>
              </S.BoxUser>
            </S.BannerUser>
          </S.Wrapper>
        </S.HeaderMain>
      </S.Header>
    </>
  );
}
//
