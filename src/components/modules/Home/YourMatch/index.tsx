'use client';

import moment from 'moment';

import * as S from './styles';

interface MenuItem {
  label?: string;
  date?: string;
  curentNumber?: number;
  maxNumber?: number;
  href?: string;
}

const listItems: MenuItem[] = [
  {
    label: 'Kèo anh em văn phòng đấm nhau',
    date: '2024-04-23T16:53:35.358Z',
    curentNumber: 1,
    maxNumber: 12,
    href: '/',
  },
  {
    label: 'Đại hội võ lâm văn phòng',
    date: '2024-04-23T16:53:35.358Z',
    curentNumber: 12,
    maxNumber: 12,
    href: '/',
  },
  {
    label: 'Giao lưu FPT',
    date: '2024-04-23T16:53:35.358Z',
    curentNumber: 12,
    maxNumber: 12,
    href: '/',
  },
  {
    label: 'Đấm đá túi bụi',
    date: '2024-04-23T16:53:35.358Z',
    curentNumber: 0,
    maxNumber: 12,
    href: '/',
  },
];

const items = listItems.map((item, index) => {
  return {
    key: `${index}`,
    label: `${item.label}` ?? '',
    date: `${item.date}` ?? '',
    curentNumber: item.curentNumber ?? 0,
    maxNumber: item.maxNumber ?? 12,
    href: `${item.href}`,
  };
});

function YourMatch() {
  return (
    <S.CustomBoxFlex vertical gap={16}>
      <S.TitleContainer>
        <S.ListTitle>KÈO SẮP ĐÁ</S.ListTitle>
        <S.CustomDivider></S.CustomDivider>
      </S.TitleContainer>
      <S.List>
        {items?.map((item, index) => {
          const isFull = item.curentNumber === item.maxNumber;
          return (
            <li key={item?.key}>
              <S.ItemsContainer>
                <S.CustomCalendarOutlined $status={isFull} />
                <S.MiddleInfor>
                  <S.CustomText $status={isFull}>{item.label}</S.CustomText>
                  <S.CustomTimeText $status={isFull}>
                    {moment(item.date).format('LT')} |{' '}
                    {moment(item.date).format('L')}
                  </S.CustomTimeText>
                </S.MiddleInfor>
                <S.CustomTag $status={isFull}>
                  <S.CustomTextTag>
                    {item.curentNumber}/{item.maxNumber}
                  </S.CustomTextTag>
                </S.CustomTag>
              </S.ItemsContainer>
            </li>
          );
        })}
      </S.List>
    </S.CustomBoxFlex>
  );
}

export default YourMatch;
