import { Card, Flex, Timeline } from 'antd';

import styled from 'styled-components';

import devices from '@/style/themes/default/breakpoints';

export const Right = styled(Flex)``;

export const MatchHistory = styled(Flex)`
  margin-top: 6px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (${devices.mdMax}) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }
  @media (${devices.smMax}) {
    width: 90%;
    height: auto;
    margin-top: 0;
  }
`;
export const TimeLineActivites = styled(Timeline)`
  .ant-timeline-item-content {
    display: flex;
  }
  .ant-timeline-item {
    padding-bottom: 12px;
    box-sizing: border-box;
  }
  .ant-timeline-item:last-child .ant-timeline-item-content {
    padding-bottom: 0;
    min-height: 0px;
  }
`;
export const Activites = styled(Card)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (${devices.xxlMax}) {
    width: 100%;
  }
  @media (${devices.lgMax}) {
    height: 260px;
  }
  @media (${devices.mdMax}) {
    height: 270px;
  }
  @media (${devices.smMax}) {
    height: auto;
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
  @media (${devices.xxlMax}) {
    row-gap: 14px;
    column-gap: 20px;
  }
`;
export const Item = styled(Flex)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  @media (${devices.xxlMax}) {
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
  @media (${devices.lgMax}) {
    font-size: 14px;
  }
`;
