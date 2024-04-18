import styled from 'styled-components';
import { InputNumber as InputAntd } from 'antd';

export const WrapInput = styled.div``;

export const InputNumber = styled(InputAntd)`
  width: 100%;
  box-shadow: none !important;
  border-color: none !important;
  border-radius: 0px;
  border: 1px solid ${(props) => props.theme.colors.newtral};
  height: 48px;

  .ant-input-number-outlined:focus {
    border-color: none !important;
  }

  &.ant-input-number-outlined:focus-within {
    border: 1px solid ${(props) => props.theme.colors.primary} !important;
  }

  &.ant-input-number {
    .ant-input-number-input-wrap {
      input {
        width: 100%;
        height: 48px;
        box-shadow: none !important;
        border-color: none !important;

        font-weight: ${({ theme }) => theme.fontWeight.regular};
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 24px;
        color: ${(props) => props.theme.colors.newtral};

        &::placeholder {
          font-weight: ${({ theme }) => theme.fontWeight.regular};
          font-size: ${({ theme }) => theme.fontSize.base};
          line-height: 24px;
          color: ${(props) => props.theme.colors.newtralLight};
        }
      }
    }
  }

  &:not(:disabled):hover {
    border: 1px solid ${(props) => props.theme.colors.primary} !important;
  }
`;
