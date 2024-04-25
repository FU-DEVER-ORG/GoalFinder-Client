'use client';

import { Avatar } from 'antd';
import moment from 'moment';

import * as S from './styles';

interface MatchDetail {
  name?: string;
  prestigeScore?: number;
  label?: string;
  date?: string;
  location?: string;
  competition?: string;
  area?: string;
  quantity?: string;
  money?: string;
  description?: string;
  href?: string;
}

const data: MatchDetail = {
  name: 'Trần Văn Bảo Thắng',
  prestigeScore: 120,
  label: 'Kèo anh em văn phòng đấm nhau',
  date: '2024-04-23T16:53:35.358Z',
  location: 'Sân bóng đá Chuyên Việt, 98 Đ. Tiểu La',
  competition: 'Vui vẻ',
  area: 'Hòa Thuận Đông, Hải Châu, Đà Nẵng',
  quantity: '12 người',
  money: '500.000 VNĐ',
  description:
    'Trận đấu được tổ chức nhằm tạo ra một môi trường thân thiện và hòa mình trong niềm đam mê bóng đá. Chúng ta sẽ cùng nhau tận hưởng niềm vui của trái bóng tròn, xây dựng mối quan hệ gắn kết và tạo ra những kỷ niệm đáng nhớ trên sân cỏ. Hãy đến và tham gia cùng chúng tôi! ⚽️',
  href: '/',
};

function MatchDescription() {
  return (
    <S.FeedContainer>
      <S.UserInfor>
        <Avatar src="/images/layout/avatar.jpeg" size={40} />
        <S.CustomFlex vertical>
          <S.Name>{data?.name}</S.Name>
          <S.FlexPrestige>
            <S.CustomCrownFilled />
            <S.PrestigeScore>{data?.prestigeScore} Uy tín</S.PrestigeScore>
          </S.FlexPrestige>
        </S.CustomFlex>
        <S.CustomEllipsisOutlined />
      </S.UserInfor>
      <S.FlexMatchInfor>
        <S.TitleMatchInfor>{data?.label}</S.TitleMatchInfor>
        <S.ListMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Thời gian:</S.BoldText>
              <S.NoneBoldText>
                {moment(data?.date).format('LT')} |{' '}
                {moment(data?.date).format('L')}
              </S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Địa điểm:</S.BoldText>
              <S.NoneBoldText>{data?.location}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Cạnh tranh:</S.BoldText>
              <S.NoneBoldText>{data?.competition}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Khu vực:</S.BoldText>
              <S.NoneBoldText>{data?.area}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Số lượng:</S.BoldText>
              <S.NoneBoldText>{data?.quantity}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Tiền sân:</S.BoldText>
              <S.NoneBoldText>{data?.money}</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
        </S.ListMatchInfor>
      </S.FlexMatchInfor>
      <S.ContainerDescription>
        <S.TitleDescription>Mô tả thêm:</S.TitleDescription>
        <S.Description>{data?.description}</S.Description>
      </S.ContainerDescription>
    </S.FeedContainer>
  );
}

export default MatchDescription;
