import styled from 'styled-components';
import { Flex } from 'antd';

export const Container = styled(Flex)`
  width: 100%;
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px 30px;
  }
  @media (max-width: 576px) {
    padding: 10px 30px;
  }
`;

export const Body = styled(Flex)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 1086px) {
    width: 100%;
  }
  @media (max-width: 890px) {
    flex-direction: column;
  }
  @media (max-width: 870px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 576px) {
  }
`;
