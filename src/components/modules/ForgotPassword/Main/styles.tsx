import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  padding: 24px 20px;
  width: 100%;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  .ant-input-affix-wrapper {
    padding: 0px;
    border-radius: 0px;
    border: 1px solid #d9d9d9 !important;
  }

  .ant-input-number-handler-wrap {
    display: none !important;
  }
`;
