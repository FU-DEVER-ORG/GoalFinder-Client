import styled, { css } from 'styled-components';

import { TimePicker } from 'antd';

import { TimepickerPropsStyles } from '.';

export const TimepickerWrapper = styled.div<TimepickerPropsStyles>`
  margin-bottom: 8px;
`;

export const Label = styled.label<TimepickerPropsStyles>`
  display: block;
  font-size: ${({ theme }) => theme?.fontSize?.base};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  line-height: 1.7;
  margin-bottom: 6px;
`;

export const TimepickerRangeCommon = styled(
  TimePicker.RangePicker,
)<TimepickerPropsStyles>`
  &.ant-picker {
    padding: 10px 5px 10px 15px;
    
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: 8px;
    height: ${(props) => props?.height || '51px'};
    width: ${(props) => props?.width || '100%'};

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-picker-focused {
      box-shadow: none !important;
      border: 1px solid ${(props) => props?.theme?.colors?.primaryColor};
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    }

    &:disabled {
      color: ${({ theme }) => theme?.colors?.textColor};
      background: ${({ theme }) => theme?.colors?.other?.background2};
      color: ${({ theme }) => theme?.colors?.other?.text2};
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

    .ant-picker-input > input {
      color: ${({ theme }) => theme?.colors?.other?.text2};
    }

    .ant-picker-prefix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-picker-suffix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    &.ant-picker-status-error {
      border-color: ${({ theme }) => theme?.colors?.other?.red2} !important;

      .ant-input-number-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.grayDark} !important;
      }
    }
  }
`;
export const TimepickerCommon = styled(TimePicker)<TimepickerPropsStyles>`
  &.ant-picker {
    padding: 10px 5px 10px 15px;
    border: 1px solid
      ${(props) =>
        props?.borderColor || props?.theme?.colors?.other?.background1};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: 0;
    height: ${(props) => props?.height || '51px'};
    width: ${(props) => props?.width || '100%'};

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-picker-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props?.theme?.colors?.primaryColor};
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    }

    &:disabled {
      color: ${({ theme }) => theme?.colors?.textColor};
      background: ${({ theme }) => theme?.colors?.other?.background2};
      color: ${({ theme }) => theme?.colors?.other?.text2};
    }

    .ant-picker-input > input {
      color: ${({ theme }) => theme?.colors?.other?.text2};
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
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-picker-suffix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    &.ant-picker-status-error {
      border-color: ${({ theme }) => theme?.colors?.other?.red2} !important;

      .ant-input-number-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.grayDark} !important;
      }
    }
  }
`;

export const Required = styled.span`
  color: ${({ theme }) => theme?.colors?.other?.red1};
`;
