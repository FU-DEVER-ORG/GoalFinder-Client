import styled from 'styled-components';

import { Card, Flex } from 'antd';

export const Right = styled(Flex)``;

export const MatchHistory = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Activites = styled(Card)`
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 1090px) {
    width: 100%;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const UserAction = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  text-align: left;
`;

export const Title = styled(Flex)`
  flex-direction: row;
  gap: 4px;
`;
export const TitleText = styled.p`
  margin-top: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: 0.08em;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;
export const MatchProperties = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PropertiesList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-gap: 10px;
  align-items: center;
  padding-bottom: 12px;
  @media (max-width: 1090px) {
    row-gap: 14px;
    column-gap: 20px;
  }
  @media (max-width: 1023px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;

export const Item = styled(Flex)`
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  @media (max-width: 1090px) {
    font-size: 14px;
  }
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    color: rgb(255, 153, 0);
    cursor: pointer;
  }
`;

export const ItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 1090px) {
    font-size: 14px;
  }
`;
