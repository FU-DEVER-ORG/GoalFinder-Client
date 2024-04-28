import { CalendarOutlined } from '@ant-design/icons';
import { Divider, Tag } from 'antd';
import styled, { css } from 'styled-components';

import BoxFlex from '@/components/core/common/BoxFlex';

export const CustomBoxFlex = styled(BoxFlex)`
  width: 360px;

  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListTitle = styled.p`
  font-weight: 500;
  font size: 18px;
  line-height: 21.78px;
  align-items: center;
`;

export const CustomDivider = styled(Divider)`
  margin: 0 !important;
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemsContainer = styled.div`
  width: 320px;

  display: flex;
  gap: 8px !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CustomCalendarOutlined = styled(CalendarOutlined)<{
  $status: boolean;
}>`
  font-size: 21.43px;

  ${({ $status }) =>
    $status
      ? css`
          color: #4daa57 !important;
        `
      : css`
          color: #999999 !important;
        `}
`;

export const CustomTag = styled(Tag)<{ $status: boolean }>`
  width: 46px !important;
  height: 20px !important;
  padding: 10px 0px 0px 0px;
  border-radius: 50px !important;
  border: 1px;

  display: flex !important;
  align-items: center !important;
  justify-content: center;

  ${({ $status }) =>
    $status
      ? css`
          background-color: #4daa57 !important;
          color: white;
        `
      : css`
          background-color: #999999 !important;
          color: white;
        `}
`;

export const CustomTextTag = styled.h5`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 8px;
  text-align: center;
  color: white;
`;

export const MiddleInfor = styled.div`
  width: 234px;
  padding: 4px 0px 4px 0px;

  display: flex;
  gap: 4px !important;
  flex-direction: column;
`;
export const CustomText = styled.p<{ $status: boolean }>`
  width: 234px;
  height: 19px;

  font-weight: 500;
  font-size: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ $status }) =>
    $status
      ? css`
          color: #4daa57;
        `
      : css`
          color: #999999;
        `}
`;
export const CustomTimeText = styled.span<{ $status: boolean }>`
  width: 234px;
  height: 17px;

  font-weight: 400;
  font-size: 14px;
  color: #4daa57;

  ${({ $status }) =>
    $status
      ? css`
          color: #4daa57;
        `
      : css`
          color: #999999;
        `}
`;
