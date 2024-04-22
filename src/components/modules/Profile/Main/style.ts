import { Flex } from 'antd';
import styled from 'styled-components';

export const Container = styled(Flex)`
  width: 100%;
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Body = styled(Flex)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 1086px) {
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: 888px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;
