import Image from 'next/image';

import ball from '@/public/icon/match-propertiesIcon/aboutme/ball.svg';
import medal from '@/public/icon/match-propertiesIcon/aboutme/medal-outline.svg';
import local from '@/public/icon/match-propertiesIcon/aboutme/navigate-circle-outline.svg';
import reward from '@/public/icon/match-propertiesIcon/aboutme/reward.svg';

import * as S from './style';

interface userBasicInfor {
  nickName: string;
  lastName: string;
  firstName: string;
  description: string;
  prestigeScore: number;
  address: string;
  backgroundUrl: string;
  avatarUrl: string;
  experience: string;
  competitionLevel: string;
  positions: String[];
}

interface matchHistory {
  userDetail: userBasicInfor;
}

export default function Left({ userDetail }: matchHistory) {
  return (
    <>
      <S.Left>
        <S.Wrapper>
          <S.IntroTitle>Giới Thiệu</S.IntroTitle>
          <S.IntroQuotes>{userDetail.description}</S.IntroQuotes>
          <S.CardDivider />
          <S.Story>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={local} alt="" fill sizes="auto" />
              </S.ImageWrapper>
              <S.Information>{userDetail.address}</S.Information>
            </S.Aboutme>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={medal} alt="" fill sizes="auto" />
              </S.ImageWrapper>
              <S.Information>{userDetail.experience}</S.Information>
            </S.Aboutme>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={ball} alt="" fill sizes="auto" />
              </S.ImageWrapper>

              <S.Information>{userDetail.positions.join(', ')}</S.Information>
            </S.Aboutme>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={reward} alt="" fill sizes="auto" />
              </S.ImageWrapper>
              <S.Information>{userDetail.competitionLevel}</S.Information>
            </S.Aboutme>
          </S.Story>
        </S.Wrapper>
      </S.Left>
    </>
  );
}
