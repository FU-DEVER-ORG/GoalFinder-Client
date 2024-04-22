'use client';

import React from 'react';
import {MenuProps} from 'antd';

import * as S from './styles';

interface MenuItem {
  label?: string;
  date?: string;
  time?: string;
  status?: boolean;
  href?: string;
}

// function calculateMember(fullRatio: string) : string {
  
// }

const listItems: MenuItem[] = [
  { label: "Kèo anh em văn phòng đấm nhau", date: "", time: "16/04/2024", status: true, href: "/" },
  { label: "Đại hội võ lâm văn phòng", date: "", time: "16/04/2024", status: false, href: "/" },
  { label: "Giao lưu FPT", date: "", time: "16/04/2024", status: true, href: "/" },
  { label: "Đấm đá túi bụi", date: "", time: "16/04/2024", status: false, href: "/" }]

const items: MenuProps['items'] = listItems.map((item, index) => {
  return {
    key: `${index}`,
    label: `${item.label}`,
    href: `${item.href}`,
    status: item.status,
  }
});

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
            const menuItem = item as MenuItem;
              return <li key={item?.key}>
                <S.ItemsContainer>
                  <S.CustomCalendarOutlined $status={menuItem.status ?? false}/>
                  <S.MiddleInfor>
                    <S.CustomText $status={menuItem.status ?? false}>{menuItem.label}</S.CustomText>
                    <S.CustomTimeText $status={menuItem.status ?? false}>17:30 | 16/04/2024</S.CustomTimeText>
                  </S.MiddleInfor>
                  <S.CustomTag $status={menuItem.status ?? false} >
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