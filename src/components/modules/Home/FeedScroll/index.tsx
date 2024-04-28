'use client';

import Feed from '../Feed';
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
  isRegister?: boolean;
  isAccepted?: boolean;
  href?: string;
}

const listItems: MenuItem[] = [
  {
    name: 'Trần Văn Bảo Thắng',
    prestigeScore: 120,
    label: 'Kèo anh em văn phòng đấm nhau',
    date: '2024-04-23T16:53:35.358Z',
    location: 'Sân bóng đá Chuyên Việt, 98 Đ. Tiểu La',
    competition: 'Vui vẻ',
    area: 'Hòa Thuận Đông, Hải Châu, Đà Nẵng',
    quantity: '12 người',
    money: '500.000 VNĐ',
    description: 'Trận đấu được tổ chức nhằm tạo ra một môi trường thân thiện và hòa mình trong niềm đam mê bóng đá. Chúng ta sẽ cùng nhau tận hưởng niềm vui của trái bóng tròn, xây dựng mối quan hệ gắn kết và tạo ra những kỷ niệm đáng nhớ trên sân cỏ. Hãy đến và tham gia cùng chúng tôi! ⚽️',
    isRegister: true,
    isAccepted: false,
    href: '/',
  },
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
    isRegister: false,
    isAccepted: false,
    href: '/',
  },
  {
    name: 'Mr. Đàm',
    prestigeScore: 100,
    label: 'Giao lưu Coder-FPT',
    date: '2024-04-23T16:53:35.358Z',
    location: 'Sân Bóng Đá Mini Việt Hàn, 470 Đ. Trần Đại Nghĩa',
    competition: 'team nào code giỏi hơn',
    area: 'Hoà Hải, Ngũ Hành Sơn, Đà Nẵng',
    quantity: '12 người',
    money: '300.000 VNĐ',
    description: 'Trận đấu bóng đá được tổ chức để xem team Coder của FPT Software nào code đỉnh cao hơn',
    isRegister: true,
    isAccepted: true,
    href: '/',
  },
  {
    name: 'Anh Độ Minzy',
    prestigeScore: 2000,
    label: 'Đấm đá túi bụi',
    date: '2024-04-23T16:53:35.358Z',
    location: 'Trung Tâm Bóng Đá Duy Tân, 7 Đ. Duy Tân',
    competition: 'Vui vẻ',
    area: 'Hoà Cường Bắc, Hải Châu, Đà Nẵng',
    quantity: '12 người',
    money: '700.000 VNĐ',
    description: 'Trận đấu giao lưu sinh viên vui vẻ',
    isRegister: false,
    isAccepted: false,
    href: '/',
  },

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
    isRegister: item.isRegister,
    isAccepted: item.isAccepted,
    href: `${item.href}`,
  };
});

function FeedScroll() {
  return (
    <S.Scroll vertical gap={24}>
      {items?.map((item, index) => {
        return (
          <Feed key={item.key} data ={item}/>
        )
      })
      }
    </S.Scroll>
  );
}

export default FeedScroll;
