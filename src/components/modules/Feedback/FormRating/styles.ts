import { Avatar, Flex } from 'antd';
import styled from 'styled-components';

import Button from '@/components/core/common/Button';

export const PlayerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  border-radius: 10px;
`;

export const PlayerItemOrder = styled.li`
  width: 5%;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  list-style: none;

  margin: auto 0px;

  @media ${({ theme }) => theme.breakpoints.smMax} {
    font-size: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.xsMax} {
    font-size: 10px;
  }
`;
export const PlayerItemAge = styled.li`
  width: 5%;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  list-style: none;

  margin: auto 0px;

  @media ${({ theme }) => theme.breakpoints.smMax} {
    font-size: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.xsMax} {
    font-size: 10px;
  }
`;
export const PlayerItemPosition = styled.li`
  width: 30%;

  font-weight: 500;
  font-size: 16px;
  list-style: none;
  line-height: 24px;

  margin: auto 0px;

  @media ${({ theme }) => theme.breakpoints.smMax} {
    font-size: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.xsMax} {
    font-size: 10px;
  }
`;
export const PlayerItemCompetitive = styled.li`
  width: 15%;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  list-style: none;

  margin: auto 0px;

  @media ${({ theme }) => theme.breakpoints.smMax} {
    font-size: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.xsMax} {
    font-size: 10px;
  }
`;
export const PlayerItemPhoneNum = styled.li`
  width: 15%;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  list-style: none;

  margin: auto 0px;

  @media ${({ theme }) => theme.breakpoints.smMax} {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${({ theme }) => theme.breakpoints.xsMax} {
    font-size: 10px;
  }
`;
export const CustomButton = styled(Button)<{ selected: boolean }>`
  width: 100%;
  max-height: 80px !important;
  height: 80px !important;

  type: 'default';

  color: black !important;
  background: ${({ selected }) => selected ? '#FFC6C6' : '#C6FFCC'} !important;

  margin: 6px 20px;
  padding: 0 !important;

  &.ant-btn-default:hover {
    color: black !important;
  }

  @media ${({ theme }) => theme.breakpoints.smMax} {
    max-height: 60px !important;
    height: 60px !important;

    margin: 3px 10px;
  }
`;

export const PlayerFlex = styled(Flex)`
  width: 100%;

  align-item: center;
`;

export const CustomAvatar = styled(Avatar)`
  width: 40px !important;
  height: 40px !important;

  margin-right: 20px !important;

  @media ${({ theme }) => theme.breakpoints.smMax} {
    width: 30px !important;
    height: 30px !important;
  }

  @media ${({ theme }) => theme.breakpoints.xsMax} {
    width: 25px !important;
    height: 25px !important;
  }
`;

export const PlayerAvatar = styled.li`
  width: 7.5%;

  text-align: left;
  list-style: none;

  margin: auto 0px;
`;

export const PlayerName = styled.li`
  width: 22.5%;

  text-align: left;
  list-style: none;

  line-height: 24px;
  font-weight: 500;
  font-size: 16px;

  margin: auto 0px;

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${({ theme }) => theme.breakpoints.smMax} {
    font-size: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.xsMax} {
    font-size: 10px;
  }
`;
export const ConfirmButton = styled(Button)`
  width: 100%;

  margin-top: 18px;
`;
export const RatingTitle = styled.p`
  font-size: 16px;
  font-weight: 500;

  text-align: left;
  text-decoration: underline;

  margin: 18px 0px;
`;
