import React from 'react';
import {
  EllipsisOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';

import BoxFlex from '@/components/core/common/BoxFlex';

import { MenuCss } from './styles';

const menuItems = [
  { label: 'Trang chủ', icon: HomeOutlined, href: '/' },
  { label: 'Lưu trữ', icon: HeartOutlined, href: '/' },
  { label: 'Lịch sử đăng ký', icon: HistoryOutlined, href: '/' },
  { label: 'Trang chủ', icon: EllipsisOutlined, href: '/' },
];

const items: MenuProps['items'] = menuItems.map((item, index) => ({
  key: `${index}`,
  icon: React.createElement(item.icon),
  label: `${item.label}`,
  href: `${item.href}`,
}));



function Nav() {
  return (
    <BoxFlex vertical gap={16}>
      <MenuCss mode="inline" items={items} defaultSelectedKeys={['0']}/>
    </BoxFlex>
  );
}

export default Nav;
