import { Flex } from 'antd';
import styled from 'styled-components';
import { CrownFilled } from '@ant-design/icons';

import BoxFlex from '@/components/core/common/BoxFlex';

export const FeedContainer = styled(BoxFlex)`
  width: 712px;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UserInfor = styled(Flex)`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const CustomFlex = styled(Flex)`
  width: 588px;
  height: 35px;

  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: 0.08em;
  text-align: left;
`;

export const FlexPrestige = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 4px;
`;

export const CustomCrownFilled = styled(CrownFilled)`
  color: #fcaa47 !important;
`;

export const PrestigeScore = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: center;
`;

export const FlexMatchInfor = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleMatchInfor = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: 0.08em;
`;

export const ListMatchInfor = styled.ul`
  padding: 0;

  column-count: 2;
`;

export const ItemMatchInfor = styled.li`
  margin-bottom: 12px;
  margin-left: 20px;
  line-height: 1.2;
`;

export const FlexBoxTextItem = styled.div`
  width: 100%;
  max-width: 336px;

  display: inline-flex;
  flex-direction: row;
  gap: 8px;
`;

export const BoldText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: 0.08em;
  text-wrap: nowrap;
`;

export const NoneBoldText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  letter-spacing: 0.08em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: 0.08em;
  text-decoration: underline;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;
`;
