import { Flex } from 'antd';

import styled from 'styled-components';

import devices from '@/style/themes/default/breakpoints';

export const LoadingPage = styled(Flex)`
  width: 100%;

  background-color: white;

  position: relative;

  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  max-width: 1440px;
  position: absolute;
  top: 30px;

  width: 60%;
  height: 240px;

  background-color: rgb(240, 240, 240);

  border-radius: 12px;

  @media (${devices.mdMax}) {
    height: auto;
  }
  @media (${devices.smMax}) {
    width: 88%;
    height: auto;
  }
`;

export const coverImgLoading = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 20px;
`;
