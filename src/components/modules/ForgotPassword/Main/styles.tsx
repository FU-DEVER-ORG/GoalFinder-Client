import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  padding: 40px 20px;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  .ant-input-number-handler-wrap {
    display: none !important;
  }
`;
