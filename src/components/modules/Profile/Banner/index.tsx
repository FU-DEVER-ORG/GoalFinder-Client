import Image from 'next/image';

import pretigeIcon from '@/public/icon/match-propertiesIcon/prestigeIcon.svg';

import * as S from './style';

interface BannerProps {
  userName: string;
  avatarUrl: string;
  backgroundUrl: string;
  prestigeScore: number;
}

export default function Banner({
  userName,
  avatarUrl,
  backgroundUrl,
  prestigeScore,
}: BannerProps) {
  return (
    <>
      <S.Header>
        <S.HeaderMain>
          <S.Wrapper>
            <S.CoverImage src={backgroundUrl} />
            <S.BannerUser>
              <S.Avatar>
                <S.UserAvatar src={avatarUrl} />
              </S.Avatar>
              <S.BoxUser>
                <S.Name>{userName}</S.Name>
                <S.Prestige>
                  <S.Icon>
                    <Image src={pretigeIcon} alt="" fill sizes="auto"></Image>
                  </S.Icon>
                  <S.PrestigeScore>{prestigeScore} Uy tín</S.PrestigeScore>
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
