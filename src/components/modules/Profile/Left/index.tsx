import React from 'react';
import * as S from './style';
import { Divider } from 'antd';
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
          <Divider />
          <S.Aboutme>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</S.Aboutme>
          <S.Aboutme>Nghiệp dư</S.Aboutme>
          <S.Aboutme>Thủ môn, hậu vệ, tiền đạo</S.Aboutme>
          <S.Aboutme>Đá vui vẻ, Đá nghiêm túc</S.Aboutme>
        </S.Introduction>
      </S.Left>
    </>
  );
}
