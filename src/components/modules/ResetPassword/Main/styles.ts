import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  gap: 24px;
  padding: 50px 20px;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  .ant-input-affix-wrapper {
    border-radius: 0px;
  }

  .ant-btn-primary {
    background-color: rgba(71, 108, 94, 1) !important;
  }
`;
