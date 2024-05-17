import { Form } from 'antd';
import styled from 'styled-components';

import SelectFromCommon from '@/components/core/common/form/Select';
export const FormItem = styled(Form.Item)<{ $full?: boolean }>`
  display: none !important;
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100% !important;

  .ant-select-selection-placeholder {
    color: #d9d9d9 !important;
    :hover {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  @media ${({ theme }) => theme.breakpoints.smMax} {
    width: 100% !important;
    .firjEh {
      width: 100% !important;
    }
  }
  .containerSelect {
    width: 32% !important;
    @media ${({ theme }) => theme.breakpoints.mdMax} {
      * {
        font-size: ${({ theme }) => theme.fontSize.sm} !important;
      }
    }
    @media ${({ theme }) => theme.breakpoints.smMax} {
      * {
        font-size: ${({ theme }) => theme.fontSize.xs} !important;
      }
    }
  }

  .ant-select-selector {
    min-width: 100% !important;
    width: 100% !important;
  }
`;

export const Select = styled(SelectFromCommon)<{ $isValue?: boolean }>`
  transition: all 0.3s !important;


  &:hover * {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
