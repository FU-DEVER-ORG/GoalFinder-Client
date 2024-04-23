import { Menu } from 'antd';
import styled from 'styled-components';


export const MenuCss = styled(Menu)`
  width: 280px;
  padding: 20px;
  border-radius: 8px 0px 0px 0px;
  border-inline-end: 0px !important;

  display: flex;
  flex-direction: column;
  gap: 12px !important;

  .ant-menu-item {
    width: 240px !important;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 12px, 20px, 12px, 20px !important;
    margin: 0px !important;
    gap: 12px;
  }

  .ant-menu-item-selected {
    background-color: #f1fff2 !important;
    color: #4daa57 !important;
  }

  .ant-menu-divider {
    background-color: red !important;
  }
`;