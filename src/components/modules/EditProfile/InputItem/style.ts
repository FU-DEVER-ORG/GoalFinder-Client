import {
  Flex as FlexFromAntd,
  Form,
  Radio,
  Checkbox as CheckboxFromAtnd,
} from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';

import TypographyFromCommon from '@/components/core/common/Typography';
import ButtonFromCommon from '@/components/core/common/Button';
import InputFromCommon from '@/components/core/common/form/Input';

export const WrapperItem = styled(FlexFromAntd)`
  padding-inline: 20px;

  .containerTextArea {
    width: 100%;
  }

  .ant-form-item-control-input-content {
    display: flex !important;
    justify-content: space-between;
    align-items: center !important;

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      flex-wrap: wrap !important;
    }
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    .ant-form-item {
      width: 100% !important;
    }

    .full {
      width: 100% !important;
    }
  }
`;

export const Input = styled(InputFromCommon)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 440px !important;

  * {
    margin: 0 !important;
  }

  .ant-input {
    width: 100% !important;
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    flex-wrap: wrap !important;
    width: 100% !important;
  }
`;
export const FlexWrapper = styled(FlexFromAntd)`
  width: 440px !important;
  gap: 24px;

  .ant-select-selector {
    min-width: 130px;
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    gap: 12px;
    width: 100% !important;
  }
  @media ${({ theme }) => theme.breakpoints.smMax} {
    gap: 12px;

    flex-wrap: wrap !important;

    width: 100% !important;
  }
`;
export const FormItem = styled(Form.Item)<{ $full?: boolean }>`
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  max-width: ${({ $full }) => ($full ? '440px' : 'auto')};

  margin: 0 !important;

  color: #d9d9d9;

  .ant-form-item-control-input-content {
    display: block !important;
  }

  .ant-radio-group,
  .ant-form-item,
  .ant-checkbox-group,
  textarea {
    display: flex !important;
    justify-content: space-between !important;
    flex-wrap: nowrap !important;

    gap: 24px;

    height: 100% !important;
    width: 440px !important;
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    .ant-radio-group,
    .ant-form-item,
    .ant-checkbox-group,
    textarea {
      width: 100% !important;
    }
  }

  @media ${({ theme }) => theme.breakpoints.smMax} {
    * {
      font-size: ${({ theme }) => theme.fontSize.xs} !important;
    }
    .ant-radio-group,
    .ant-form-item,
    .ant-checkbox-group {
      flex-wrap: wrap !important;

      gap: 12px;

      width: 100% !important;
    }
  }
`;
export const TextAreaInput = styled(TextArea)`
  width: 100% !important;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary} !important ;
  }
`;
export const RadioGroup = styled(Radio.Group)`
  height: 48px !important;

  .ant-radio-button-wrapper::before {
    display: none !important;
  }

  .ant-radio-button-wrapper-checked {
    background-color: ${({ theme }) => theme.colors.primary} !important;
    border-color: ${({ theme }) => theme.colors.primary} !important;
    * {
      color: #fff !important;
    }
  }

  @media ${({ theme }) => theme.breakpoints.smMax} {
    gap: 12px;

    flex-wrap: wrap !important;

    width: 100% !important;
    height: 100% !important;
  }
`;
export const RadioButton = styled(Radio.Button)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  width: 100% !important;
  height: 100% !important;

  padding: 12px 20px !important;
  border-radius: 8px;
  border: 1px solid #d9d9d9 !important;

  color: #d9d9d9 !important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary} !important;
    border-color: ${({ theme }) => theme.colors.primary} !important;
    color: #fff !important;
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
  display: flex;

  width: 100% !important;

  label {
    width: 100% !important;
  }
`;
export const Label = styled.label<{ $color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-color: ${(props) => props?.$color || props.theme.colors.primary};
  background-color: ${(props) =>
    props?.$color ? '#fff' : props.theme.colors.primary};

  border-radius: 8px;
  padding: 12px 20px !important;

  cursor: pointer;
  transition: all 0.3s !important;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff !important;
  }
  &:hover span {
    color: #fff !important;
  }
  span {
    font-size: 14px;
    font-weight: 400;

    color: ${(props) => props?.$color || '#fff'} !important ;
    transition: all 0.3s !important;
  }
`;
export const Flex = styled(FlexFromAntd)`
  @media ${({ theme }) => theme.breakpoints.mdMax} {
    flex-wrap: wrap !important;
  }
`;
export const Typography = styled(TypographyFromCommon)`
  min-width: 100px;

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    padding-bottom: 8px;

    margin: 0 !important;
  }
`;
