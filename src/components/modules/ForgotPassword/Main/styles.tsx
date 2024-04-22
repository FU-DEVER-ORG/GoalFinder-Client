import { Flex } from 'antd';
import styled from 'styled-components';

export const HomeWrapper = styled(Flex)`
  font-family: none !important;

  padding: 24px 20px;
  width: 100%;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  .ant-input-affix-wrapper,
  .ant-input-number-outlined,
  .ant-input-number-input-wrap {
    padding: 0px;
    border-radius: 0px;
    border: 1px solid #d9d9d9 !important;
  }

  .ant-input-number:hover,
  .ant-input-affix-wrapper:hover {
    border: 1px solid rgba(71, 108, 94, 1) !important;
  }

  .bTCrvA.ant-btn-default {
    border-color: #d9d9d9;
  }

  .ant-input-number-outlined {
    height: 50px;
    width: 50px;
  }

  .bTCrvA {
    border-radius: 0px !important;
    padding: 12px 0px 12px 8px !important;
  }

  .cbQfXF.ant-input-affix-wrapper span {
    color: #000;
  }

  .ant-input-number-handler-wrap {
    display: none !important;
  }
`;
