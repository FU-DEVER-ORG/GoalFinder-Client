import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  gap: 24px;
  padding: 40px 20px;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  .resetWrapper {
    display: flex;
    flex-direction: column;
  }
`;
