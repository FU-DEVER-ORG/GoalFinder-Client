import Image from 'next/image';
import * as S from './style';

import ball from '@/public/icon/match-propertiesIcon/aboutme/ball.svg';
import medal from '@/public/icon/match-propertiesIcon/aboutme/medal-outline.svg';
import local from '@/public/icon/match-propertiesIcon/aboutme/navigate-circle-outline.svg';
import reward from '@/public/icon/match-propertiesIcon/aboutme/reward.svg';

export default function Left() {
  return (
    <>
      <S.Left>
        <S.Introduction>
          <S.IntroTitle>Giới Thiệu</S.IntroTitle>
          <S.IntroQuotes>
            Âm nhạc, Nghệ thuật và Giải trí.
            <br />
            Hòm thư: contact.cotdien@gmail.com
          </S.IntroQuotes>
          <S.CardDivider />
          <S.Story>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={local} alt="" fill sizes="auto" />
              </S.ImageWrapper>
              <S.Information>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</S.Information>
            </S.Aboutme>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={medal} alt="" fill sizes="auto" />
              </S.ImageWrapper>
              <S.Information>Nghiệp dư</S.Information>
            </S.Aboutme>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={ball} alt="" fill sizes="auto" />
              </S.ImageWrapper>

              <S.Information>Thủ môn, hậu vệ, tiền đạo</S.Information>
            </S.Aboutme>
            <S.Aboutme>
              <S.ImageWrapper>
                <Image src={reward} alt="" fill sizes="auto" />
              </S.ImageWrapper>
              <S.Information> Đá vui vẻ, Đá nghiêm túc</S.Information>
            </S.Aboutme>
          </S.Story>
        </S.Introduction>
      </S.Left>
    </>
  );
}
