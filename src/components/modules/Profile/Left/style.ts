import { Card, Flex } from 'antd';
import styled from 'styled-components';

export const Left = styled(Flex)`
  width: 420px;
  height: 330px;
  @media (max-width: 1023px) {
    width: 320px;
    height: 340px;
  }
  @media (max-width: 888px) {
    width: 80%;
    height: 300px;
  }
`;
export const Introduction = styled(Card)`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const IntroTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
  text-align: left;
  margin-bottom: 20px;
`;
export const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(211 211 211);
  margin: 24px 0;
  @media (max-width: 888px) {
    margin: 12px 0;
  }
  @media (max-width: 767px) {
    margin: 5px 0;
  }
`;
export const IntroQuotes = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: center;
  @media (max-width: 1023px) {
    font-size: 14px;
    line-height: 16.36px;
    text-align: left;
  }
`;
export const Aboutme = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  letter-spacing: 0.08em;
  text-align: left;
  padding-bottom: 8px;
  @media (max-width: 1023px) {
    font-size: 14px;
    padding-bottom: 2px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 0;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    padding: 4px 0;
  }
`;
