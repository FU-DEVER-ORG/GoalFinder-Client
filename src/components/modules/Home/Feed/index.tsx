'use client';

import BoxFlex from '@/components/core/common/BoxFlex';

import * as S from './styles';
import { Avatar, Button, Flex } from 'antd';
import { CrownFilled, EllipsisOutlined, UserOutlined } from '@ant-design/icons';

function Feed() {
  return (
    <S.FeedContainer>
      <S.UserInfor>
        <Avatar src="/images/layout/avatar.jpeg" size={40} />
        <S.CustomFlex vertical>
          <S.Name>Trần Văn Bảo Thắng</S.Name>
          <S.FlexPrestige>
            <S.CustomCrownFilled />
            <S.PrestigeScore>120 Uy tín</S.PrestigeScore>
          </S.FlexPrestige>
        </S.CustomFlex>
        <EllipsisOutlined/>
      </S.UserInfor>
      <S.FlexMatchInfor>
        <S.TitleMatchInfor>Kèo anh em văn phòng đấm nhau</S.TitleMatchInfor>
        <S.ListMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Thời gian:</S.BoldText>
              <S.NoneBoldText>20/04/2024, 15:00</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Địa điểm:</S.BoldText>
              <S.NoneBoldText>Sân ABC, Đường XYZ</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Cạnh tranh:</S.BoldText>
              <S.NoneBoldText>Vui vẻ</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Khu vực:</S.BoldText>
              <S.NoneBoldText>Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Số lượng:</S.BoldText>
              <S.NoneBoldText>12 người</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
          <S.ItemMatchInfor>
            <S.FlexBoxTextItem>
              <S.BoldText>Tiền sân:</S.BoldText>
              <S.NoneBoldText>500.000 VNĐ</S.NoneBoldText>
            </S.FlexBoxTextItem>
          </S.ItemMatchInfor>
        </S.ListMatchInfor>
      </S.FlexMatchInfor>
      <Flex>
        <p>Mô tả thêm:</p>
        <p>Trận đấu được tổ chức nhằm tạo ra một môi trường thân thiện và hòa mình trong niềm đam mê bóng đá. Chúng ta sẽ cùng nhau tận hưởng niềm vui của trái bóng tròn, xây dựng mối quan hệ gắn kết và tạo ra những kỷ niệm đáng nhớ trên sân cỏ. Hãy đến và tham gia cùng chúng tôi! ⚽️</p>
      </Flex>
      <Button type="default">Huỷ đăng ký</Button>
    </S.FeedContainer>
  );
}

export default Feed;
