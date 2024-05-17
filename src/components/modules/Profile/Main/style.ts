import { Card, Flex, Skeleton } from 'antd';

import styled from 'styled-components';

import devices from '@/style/themes/default/breakpoints';

export const Container = styled(Flex)`
  width: 100%;

  display: flex;

  padding: 20px 70px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (${devices.xlMax}) {
    padding: 10px 30px;
  }
  @media (${devices.smMax}) {
    padding: 10px 30px;
  }
`;

export const Body = styled(Flex)`
  display: flex;
  flex-direction: row;
  gap: 20px;

  box-sizing: border-box;
  @media (${devices.xlMax}) {
    width: 100%;
  }
  @media (${devices.mdMax}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
