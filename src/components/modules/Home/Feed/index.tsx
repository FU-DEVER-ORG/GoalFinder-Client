'use client';

import moment from 'moment';
import { Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import Button from '@/components/core/common/Button';

import * as S from './styles';

interface MenuItem {
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

const listItems: MenuItem[] = [
  // {
  //   name: 'Trần Văn Bảo Thắng',
  //   prestigeScore: 120,
  //   label: 'Kèo anh em văn phòng đấm nhau',
  //   date: '2024-04-23T16:53:35.358Z',
  //   location: 'Sân bóng đá Chuyên Việt, 98 Đ. Tiểu La',
  //   competition: 'Vui vẻ',
  //   area: 'Hòa Thuận Đông, Hải Châu, Đà Nẵng',
  //   quantity: '12 người',
  //   money: '500.000 VNĐ',
  //   description: 'Trận đấu được tổ chức nhằm tạo ra một môi trường thân thiện và hòa mình trong niềm đam mê bóng đá. Chúng ta sẽ cùng nhau tận hưởng niềm vui của trái bóng tròn, xây dựng mối quan hệ gắn kết và tạo ra những kỷ niệm đáng nhớ trên sân cỏ. Hãy đến và tham gia cùng chúng tôi! ⚽️',
  //   href: '/',
  // },
  {
    name: 'Nguyễn Văn Duy Khang',
    prestigeScore: 100,
    label: 'Đại hội võ lâm văn phòng',
    date: '2024-04-23T16:53:35.358Z',
    location: 'Sân Bóng Đá Mini Việt Hàn, 470 Đ. Trần Đại Nghĩa',
    competition: 'Try hard',
    area: 'Hoà Hải, Ngũ Hành Sơn, Đà Nẵng',
    quantity: '12 người',
    money: '300.000 VNĐ',
    description: 'Giải nhân viên văn phòng, tính cạnh tranh cao, xong trận đấu nếu rãnh ae giao lưu bằng sinh tố lúa mạch',
    href: '/',
  },
  // {
  //   name: 'Mr. Đàm',
  //   prestigeScore: 100,
  //   label: 'Giao lưu Coder-FPT',
  //   date: '2024-04-23T16:53:35.358Z',
  //   location: 'Sân Bóng Đá Mini Việt Hàn, 470 Đ. Trần Đại Nghĩa',
  //   competition: 'team nào code giỏi hơn',
  //   area: 'Hoà Hải, Ngũ Hành Sơn, Đà Nẵng',
  //   quantity: '12 người',
  //   money: '300.000 VNĐ',
  //   description: 'Trận đấu bóng đá được tổ chức để xem team Coder của FPT Software nào code đỉnh cao hơn',
  //   href: '/',
  // },
  // {
  //   name: 'Anh Độ Minzy',
  //   prestigeScore: 2000,
  //   label: 'Đấm đá túi bụi',
  //   date: '2024-04-23T16:53:35.358Z',
  //   location: 'Trung Tâm Bóng Đá Duy Tân, 7 Đ. Duy Tân',
  //   competition: 'Vui vẻ',
  //   area: 'Hoà Cường Bắc, Hải Châu, Đà Nẵng',
  //   quantity: '12 người',
  //   money: '700.000 VNĐ',
  //   description: 'Trận đấu giao lưu sinh viên vui vẻ',
  //   href: '/',
  // },

  /* ở trên là data giả định để test, sẽ xoá sau khi có API*/ 
];

const items = listItems.map((item, index) => {
  return {
    key: `${index}`,
    name: `${item.name}` ?? '',
    prestigeScore: item.prestigeScore,
    label: `${item.label}` ?? '',
    date: `${item.date}` ?? '',
    location: `${item.location}` ?? '',
    competition: `${item.competition}` ?? '',
    area: `${item.area}` ?? '',
    quantity: `${item.quantity}` ?? '',
    money: `${item.money}` ?? '',
    description: `${item.description}` ?? '',
    href: `${item.href}`,
  };
});

function Feed() {
  return (
    <S.FeedContainer>
      {
        items?.map((item, index) => {
          return (
            <>
              <S.UserInfor>
                <Avatar src="/images/layout/avatar.jpeg" size={40} />
                <S.CustomFlex vertical>
                  <S.Name>{item.name}</S.Name>
                  <S.FlexPrestige>
                    <S.CustomCrownFilled />
                    <S.PrestigeScore>{item.prestigeScore} Uy tín</S.PrestigeScore>
                  </S.FlexPrestige>
                </S.CustomFlex>
                <EllipsisOutlined />
              </S.UserInfor>
              <S.FlexMatchInfor>
                <S.TitleMatchInfor>{item.label}</S.TitleMatchInfor>
                <S.ListMatchInfor>
                  <S.ItemMatchInfor>
                    <S.FlexBoxTextItem>
                      <S.BoldText>Thời gian:</S.BoldText>
                      <S.NoneBoldText>
                        {moment(item.date).format('LT')} |{' '}
                        {moment(item.date).format('L')}
                      </S.NoneBoldText>
                    </S.FlexBoxTextItem>
                  </S.ItemMatchInfor>
                  <S.ItemMatchInfor>
                    <S.FlexBoxTextItem>
                      <S.BoldText>Địa điểm:</S.BoldText>
                      <S.NoneBoldText>{item.location}</S.NoneBoldText>
                    </S.FlexBoxTextItem>
                  </S.ItemMatchInfor>
                  <S.ItemMatchInfor>
                    <S.FlexBoxTextItem>
                      <S.BoldText>Cạnh tranh:</S.BoldText>
                      <S.NoneBoldText>{item.competition}</S.NoneBoldText>
                    </S.FlexBoxTextItem>
                  </S.ItemMatchInfor>
                  <S.ItemMatchInfor>
                    <S.FlexBoxTextItem>
                      <S.BoldText>Khu vực:</S.BoldText>
                      <S.NoneBoldText>{item.area}g</S.NoneBoldText>
                    </S.FlexBoxTextItem>
                  </S.ItemMatchInfor>
                  <S.ItemMatchInfor>
                    <S.FlexBoxTextItem>
                      <S.BoldText>Số lượng:</S.BoldText>
                      <S.NoneBoldText>{item.quantity}</S.NoneBoldText>
                    </S.FlexBoxTextItem>
                  </S.ItemMatchInfor>
                  <S.ItemMatchInfor>
                    <S.FlexBoxTextItem>
                      <S.BoldText>Tiền sân:</S.BoldText>
                      <S.NoneBoldText>{item.money}</S.NoneBoldText>
                    </S.FlexBoxTextItem>
                  </S.ItemMatchInfor>
                </S.ListMatchInfor>
              </S.FlexMatchInfor>
              <S.ContainerDescription>
                <S.TitleDescription>Mô tả thêm:</S.TitleDescription>
                <S.Description>{item.description}</S.Description>
              </S.ContainerDescription>
              <Button $width={'100%'}>Huỷ đăng ký</Button>
            </>
          )
        })
      }

    </S.FeedContainer>
  );
}

export default Feed;
