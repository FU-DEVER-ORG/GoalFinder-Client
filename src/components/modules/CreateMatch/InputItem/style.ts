import {
  Flex as FlexFromAntd,
  Form,
} from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';

import TypographyFromCommon from '@/components/core/common/Typography';
import ButtonFromCommon from '@/components/core/common/Button';
import InputFromCommon from '@/components/core/common/form/Input';
import SelectCommon from '@/components/core/common/form/Select';
import TimepickerCommon from '@/components/core/common/form/Timepicker';


export const Timepicker = styled(TimepickerCommon)`
  *:hover {
    border-color: ${({ theme }) => theme.colors.primary} !important ;
  }
  *:focus-within {
    border-color: ${({ theme }) => theme.colors.primary} !important ;
  }
`

export const Select = styled(SelectCommon)`
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

      .full {
        width: 100%;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    .ant-form-item {
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

    flex-wrap: wrap !important;
    width: 100% !important;
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

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      gap: 12px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    max-width: none !important;
  }
`;
export const TextAreaInput = styled(TextArea)`
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px !important;
  * {
    margin: 0 !important;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary} !important ;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary} !important ;
  }
  @media ${({ theme }) => theme.breakpoints.mdMax} {
    flex-wrap: wrap !important;
    width: 100% !important;
  }
`;

export const Button = styled(ButtonFromCommon)`
  span {
    pointer-events: none;
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
  padding: 12px 20px;

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
  flex-wrap: wrap !important;
`;
export const Typography = styled(TypographyFromCommon)`
  min-width: 100px;
  @media ${({ theme }) => theme.breakpoints.mdMax} {
    flex-wrap: wrap !important;
    padding-bottom: 8px;
  }
`;
