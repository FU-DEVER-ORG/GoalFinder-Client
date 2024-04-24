import styled from 'styled-components';
import { Card, Flex } from 'antd';

export const Left = styled(Flex)`
  width: 380px;
  height: 300px;
  @media (max-width: 1086px) {
    width: 320px;
    height: 340px;
  }
  @media (max-width: 1023px) {
    width: 320px;
    height: 300px;
  }
  @media (max-width: 888px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 767px) {
    margin-top: 0;
  }
  @media (max-width: 400px) {
    margin-top: 0;
  }
`;
export const Introduction = styled(Card)`
  width: 100%;
  height: auto;
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
  background-color: rgb(221, 221, 221);
  margin: 18px 0;
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
  @media (max-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const Story = styled.div`
  @media (max-width: 888px) {
    padding: 4px 0;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-gap: 10px;
  }
  @media (max-width: 768px) {
    padding: 4px 0;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
  }
  @media (max-width: 576px) {
    padding: 4px 0;
  }
`;
export const Aboutme = styled(Flex)`
  gap: 10px;
  padding-bottom: 8px;
  @media (max-width: 1023px) {
    padding-bottom: 2px;
  }

  @media (max-width: 768px) {
    padding: 4px 0;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
  }
  @media (max-width: 576px) {
    padding: 4px 0;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;
export const Information = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  letter-spacing: 0.08em;
  text-align: left;
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
