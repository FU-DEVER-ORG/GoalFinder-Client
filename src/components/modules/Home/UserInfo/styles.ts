import { Flex } from 'antd';
import styled from 'styled-components';

export const Head = styled(Flex)`
  padding-bottom: 16px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Username = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const InfoItem = styled(Flex)`
  min-width: 100px;

  p {
    font-size: 14px;
    font-weight: 400;
  }

  span {
    font-size: 14px;
    font-weight: 700;
  }
`;
