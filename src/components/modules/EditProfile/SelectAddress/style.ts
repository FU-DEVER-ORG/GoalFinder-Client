import { Form } from 'antd';
import styled from 'styled-components';

import SelectFromCommon from '@/components/core/common/form/Select';
export const FormItem = styled(Form.Item)<{ $full?: boolean }>`
  width: ${({ $full }) => ($full ? '50%' : 'auto')};
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

  @media ${({ theme }) => theme.breakpoints.mdMax} {
    display: flex !important;
    flex-direction: column;
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100% !important;

  gap: 10px;

  .ant-select-selection-placeholder {
    color: #d9d9d9 !important;
    :hover {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }
`;

export const Select = styled(SelectFromCommon)<{ $isValue?: boolean }>`
  transition: all 0.3s !important;

  * {
    color: ${(props) =>
      props?.$isValue ? props.theme.colors.primary : '#d9d9d9'}!important;
    border-color: ${(props) =>
      props?.$isValue ? props.theme.colors.primary : '#d9d9d9'}!important;
  }

  &:hover * {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
