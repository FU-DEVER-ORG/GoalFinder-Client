
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';

import ButtonFromCommon from '@/components/core/common/Button';
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


