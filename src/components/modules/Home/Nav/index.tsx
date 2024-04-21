import BoxFlex from '@/components/core/common/BoxFlex';

import * as S from './styles';
import { EllipsisOutlined, HeartOutlined, HistoryOutlined, HomeOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Menu, MenuProps, theme } from 'antd';
import React from 'react';
import { color } from 'framer-motion';

const options = ["Trang chủ", "Lưu trữ", "Lịch sử đăng ký", "Xem thêm"];
const icons = [HomeOutlined, HeartOutlined, HistoryOutlined, EllipsisOutlined];
const items: MenuProps['items'] = icons.map((icon, key) => ({
  key: `${key}`,
  icon: React.createElement(icon),
  label: `${options[key]}`,
}));


function Nav() {
  console.log(items);
  
  return (
    <BoxFlex vertical gap={16}>
      <S.Sider >
        <S.MenuCss
          mode="inline"
          items={items}
        >
        </S.MenuCss>
      </S.Sider>
    </BoxFlex>
  );
};

export default Nav;