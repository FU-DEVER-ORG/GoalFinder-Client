import styled, { css } from 'styled-components';

import { DatePicker } from 'antd';

import { DatepickerPropsStyles } from '.';

export const DatepickerWrapper = styled.div<DatepickerPropsStyles>`
  /* margin-bottom: 8px; */
`;

export const Label = styled.label<DatepickerPropsStyles>`
  display: block;
  font-size: ${({ theme }) => theme?.fontSize?.base};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  line-height: 1.7;
  margin-bottom: 6px;
`;

export const DatepickerRangeCommon = styled(
  DatePicker.RangePicker,
)<DatepickerPropsStyles>`
  &.ant-picker {
    padding: 12px 5px 12px 16px;
    border: 1px solid
      ${(props) => props?.borderColor || props?.theme?.colors?.primaryLighter};
    color: ${(props) => props?.color || props?.theme?.colors?.newtralDark};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: 0;
    height: ${(props) => props?.height || '51px'};
    width: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-picker-focused {
      box-shadow: none !important;
      border: 1px solid ${(props) => props?.theme?.colors?.primary};
      color: ${(props) => props?.color || props?.theme?.colors?.newtralDark};
    }

    &:disabled {
      color: ${({ theme }) => theme?.colors?.newtralDark};
      background: ${({ theme }) => theme?.colors?.newtralLight};
      color: ${({ theme }) => theme?.colors?.newtralDark};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        margin: ${props.padding};
      `}

    .ant-picker-input {
      margin-left: 0 !important;
    }

    .ant-picker-input > input {
      font-size: ${({ theme }) => theme?.fontSize?.base};
      color: ${({ theme }) => theme?.colors?.newtral};
    }

    .ant-picker-prefix {
      color: ${({ theme }) => theme?.colors?.newtral};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-picker-suffix {
      color: ${({ theme }) => theme?.colors?.newtral};
      margin-right: 9px;
      font-size: 16px;
      display: block !important;
    }

    &.ant-picker-status-error {
      border-color: ${({ theme }) => theme?.colors?.errorDark} !important;

      .ant-input-number-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.newtralDarker} !important;
      }
    }
    & .ant-picker-suffix {
      display: none;
    }
    & .ant-picker-active-bar {
      width: 50%;
    }
  }
`;

export const DatepickerBox = styled.div`
  position: relative;

  .prefix-icon-wrapper {
    position: absolute;
    bottom: 8px;
    left: 15px;
    z-index: 1;
  }

  .ant-picker-input:first-child {
    margin-left: 32px;
  }
`;
export const DatepickerCommon = styled(DatePicker)<DatepickerPropsStyles>`
  &.ant-picker {
    padding: 12px 5px 12px 16px;
   
    color: ${(props) => props?.color || props?.theme?.colors?.newtral};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: 8px;
    width: ${(props) => props?.width || '100%'};
    height: ${(props) => props?.height || '48px'};

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-picker-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props?.theme?.colors?.primary};
      color: ${(props) => props?.color || props?.theme?.colors?.newtralDark};
    }

    &.ant-picker-disabled:hover {
      border: 1px solid ${(props) => props?.theme?.colors?.primaryLighter};
    }

    .ant-picker-suffix {
      display: block !important;
    }

    .ant-picker-clear {
      right: 10px;
    }

    .ant-picker-input {
      margin-left: 0 !important;
    }

    .ant-picker-input > input {
      font-size: ${({ theme }) => theme?.fontSize?.base};
      color: ${({ theme }) => theme?.colors?.newtral};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        margin: ${props.padding};
      `}

    .ant-picker-prefix {
      color: ${({ theme }) => theme?.colors?.newtralDarker};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-picker-suffix {
      /* color: ${({ theme }) => theme?.colors?.newtralDarker}; */
      margin-right: 9px;
      font-size: 16px;
    }

    &.ant-picker-status-error {
      border-color: ${({ theme }) => theme?.colors?.errorDark};

      .ant-input-number-prefix .anticon {
        /* color: ${({ theme }) => theme?.colors?.newtralDarker} !important; */
      }
    }
  }
`;

export const Required = styled.span`
  /* color: ${({ theme }) => theme?.colors?.errorDarker}; */
`;
