'use client';

import { MenuProps } from 'antd';

import * as S from './styles';
import { MenuItemGroupType, MenuItemType, SubMenuType } from 'antd/es/menu/hooks/useItems';

interface MenuItem {
  label?: string;
  date?: string;
  time?: string;
  curentNumber?: number;
  maxNumber?: number;
  href?: string;
}
type MyItemType = MenuItemType | SubMenuType | MenuItemGroupType;

const listItems: MenuItem[] = [
  { label: "Kèo anh em văn phòng đấm nhau", date: "", time: "16/04/2024", curentNumber: 0, maxNumber: 12, href: "/" },
  { label: "Đại hội võ lâm văn phòng", date: "", time: "16/04/2024", curentNumber: 12, maxNumber: 12, href: "/" },
  { label: "Giao lưu FPT", date: "", time: "16/04/2024", curentNumber: 0, maxNumber: 12, href: "/" },
  { label: "Đấm đá túi bụi", date: "", time: "16/04/2024", curentNumber: 0, maxNumber: 12, href: "/" }]

const items: MenuProps['items'] = listItems.map((item, index) => {
  return {
    key: `${index}`,
    label: `${item.label}` ?? '',
    curentNumber: item.curentNumber ?? 0,
    maxNumber: item.maxNumber ?? 12,
    href: `${item.href}`,
    // status: item.status,
  }
});

function calculateMember(curentNumber: string, maxNumber: string): boolean {
  return curentNumber === maxNumber;
}

function YourMatch() {
  return (
    <S.CustomBoxFlex vertical gap={16}>
      <S.TitleContainer>
        <S.ListTitle>
          KÈO SẮP ĐÁ
        </S.ListTitle>
        <S.CustomDivider></S.CustomDivider>
      </S.TitleContainer>
      <S.List>
        {
          items?.map((item, index) => {
            if (!item) return null;
            const isFull = calculateMember(item.curentNumber, item.maxNumber);
            return <li key={item?.key}>
              <S.ItemsContainer>
                <S.CustomCalendarOutlined $status={isFull} />
                <S.MiddleInfor>
                  <S.CustomText $status={isFull}>{item.label}</S.CustomText>
                  <S.CustomTimeText $status={isFull}>17:30 | 16/04/2024</S.CustomTimeText>
                </S.MiddleInfor>
                <S.CustomTag $status={isFull} >
                  <S.CustomTextTag >12/12</S.CustomTextTag>
                </S.CustomTag>
              </S.ItemsContainer>
            </li>
          }
          )}
      </S.List>

    </S.CustomBoxFlex>
  );
}

export default YourMatch;