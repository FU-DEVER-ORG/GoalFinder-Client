import { Flex, Form, Radio, Checkbox as CheckboxFromAtnd } from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';

import ButtonFromCommon from '@/components/core/common/Button';

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
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  max-width: ${({ $full }) => ($full ? '440px' : 'auto')};

  margin: 0 !important;

  color: #d9d9d9;

  .ant-radio-group,
  .ant-form-item,
  .ant-checkbox-group {
    display: flex !important;
    justify-content: space-between !important;
    gap: 24px;

    width: 100% !important;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
export const TextAreaInput = styled(TextArea)`

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary} !important ;
  }
`;
export const RadioGroup = styled(Radio.Group)`
  height: 48px !important;

  .ant-radio-button-wrapper::before {
    display: none !important;
  }
`;
export const RadioButton = styled(Radio.Button)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  width: 100% !important;
  height: 100% !important;

  border-radius: 8px;
  border: 1px solid #d9d9d9 !important;

  color: #d9d9d9 !important;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const Checkbox = styled(CheckboxFromAtnd)`
  position: absolute !important;
  opacity: 0 !important;

  width: 0px !important;
  height: 0px !important;
`;
export const Button = styled(ButtonFromCommon)`
  span {
    pointer-events: none;
  }
`;
export const CheckboxGroup = styled(CheckboxFromAtnd.Group)`
  label {
    width: 100% !important;
  }
  width: 100% !important;
`;
export const Label = styled.label<{ $color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-color: ${(props) => props?.$color || props.theme.colors.primary};
  border-radius: 8px;
  padding: 12px 20px;

  cursor: pointer;
  transition: all 0.3s !important;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover span {
    color: ${({ theme }) => theme.colors.primary};
  }
  span {
    font-size: 14px;
    font-weight: 400;
    
    color: ${(props) => props?.$color || props.theme.colors.primary};
    transition: all 0.3s !important;
  }
`;
