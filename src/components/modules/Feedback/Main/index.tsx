'use client';


import { Flex } from 'antd';
import FormRating from '../FormRating';
import * as S from './styles';
import Image from 'next/image';
import Input from '@/components/core/common/form/Input';
import { BellFilled, CaretDownFilled, MehFilled, SearchOutlined } from '@ant-design/icons';
import logo from '@/public/icon/layout/logo.svg';
import MatchDescription from '../MatchDescription';

function Feedback() {
  return (
    <Flex
      vertical
      style={{ backgroundColor: "#F9F9FA" }}
    >
      <S.Header>
        <S.Container>
          <S.ImageWrapper>
            <Image src={logo} alt="" fill sizes="auto" />
          </S.ImageWrapper>
          <S.InputWrap>
            <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
          </S.InputWrap>
          <Flex gap={16}>
            <S.Circle justify="center" align="center">
              <MehFilled />
              <S.Badge justify="center" align="center">
                9
              </S.Badge>
            </S.Circle>
            <S.Circle justify="center" align="center">
              <BellFilled twoToneColor="#fff" />
              <S.Badge justify="center" align="center">
                19
              </S.Badge>
            </S.Circle>
            <S.Avatar>
              <Image
                alt=""
                src={'/images/layout/avatar.jpeg'}
                width={40}
                height={40}
              />
              <S.Down justify="center" align="center">
                <CaretDownFilled size={6} />
              </S.Down>
            </S.Avatar>
          </Flex>
        </S.Container>
      </S.Header>

      <S.ContentWrapper>
        <S.RatingHeader>Đánh giá kèo của bạn</S.RatingHeader>
        <S.CustomHR />
        <MatchDescription/>
        <FormRating />
      </S.ContentWrapper>

    </Flex>

  )
}
export default Feedback;