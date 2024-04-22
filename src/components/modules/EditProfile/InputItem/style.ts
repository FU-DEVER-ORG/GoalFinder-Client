import { Flex, Form } from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';
export const WrapperItem = styled(Flex)`
  padding-inline: 20px;
  .input-styles__WrapInput-sc-e73b7906-0 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    * {
      margin: 0 !important;
    }
    .ant-input {
      width: 440px;
    }
  }
`;
export const FlexWrapper = styled(Flex)`
  width: 440px;
  .ant-select-selector {
    min-width: 130px;
  }
`;
export const FormItem = styled(Form.Item)<{ $full?: boolean }>`
  margin: 0 !important;
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  max-width: ${({ $full }) => ($full ? '440px' : 'auto')};
  color: #d9d9d9;
`;
export const TextAreaInput = styled(TextArea)`
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary} !important ;
  }
`;
