import { styled } from 'styled-components';

import { Select as SelectAntd } from 'antd';

export const WrapSelect = styled.div`
  position: relative;
`;

export const PrefixIcon = styled.div`
  position: absolute;
  z-index: 1;
  top: 48%;
  left: 11px;
  transform: translateY(-50%);

  svg {
    color: ${(props) => props.theme.colors.newtral};
    font-size: 14px;
  }
`;

export const Select = styled(SelectAntd)<{ $isPrefixIcon: boolean }>`
  width: 100%;
  height: 48px !important;
  border-radius: 0;

  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 24px;
  color: ${(props) => props.theme.colors.newtral};

  &.ant-select {
    .ant-select-selector {
      padding-left: ${({ $isPrefixIcon }) => ($isPrefixIcon ? '28px' : '11px')};
      border: 1px solid ${(props) => props.theme.colors.newtralLighter};

      .ant-select-selection-placeholder {
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 24px;
        color: ${(props) => props.theme.colors.newtralLight};
      }

      .ant-select-selection-item {
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 24px;
        color: ${(props) => props.theme.colors.newtral};
      }
    }

    &.ant-select-disabled {
      .ant-select-selector {
        opacity: 0.3;
      }
    }
  }

  &:not(.ant-select-disabled):hover,
  &:not(.ant-select-disabled).ant-select-open,
  &:not(.ant-select-disabled).ant-select-focused {
    .ant-select-selector {
      box-shadow: none !important;
      border-color: ${({ theme }) => theme?.colors?.primary} !important;
    }
  }
`;
