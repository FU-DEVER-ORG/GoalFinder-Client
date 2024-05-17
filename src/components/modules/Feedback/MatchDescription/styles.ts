import { Flex } from 'antd';
import { CrownFilled, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import BoxFlex from '@/components/core/common/BoxFlex';
import Button from '@/components/core/common/Button';

export const FeedContainer = styled(BoxFlex)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  border-radius: 10px;
  padding: 0;

  @media ${({theme}) => theme.breakpoints.mdMax} {
    gap: 12px;
  }
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

  @media ${({theme}) => theme.breakpoints.mdMax} {
    width: 80%;
  }
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

export const CustomEllipsisOutlined = styled(EllipsisOutlined)`
  font-size: 24px;
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

  @media ${({theme}) => theme.breakpoints.smMax} {
    column-count: 1;
  }
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

  @media ${({theme}) => theme.breakpoints.smMax} {
    max-width: max-content;
  }
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
  max-height: 120px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RegisterButton = styled(Button)`
  width: 100%;
  max-height: 62px !important;
  padding: 12px 20px !important;
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleTextButton = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: center;
`;

export const RequirementText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: center;
  opacity: 0.6;
`;
