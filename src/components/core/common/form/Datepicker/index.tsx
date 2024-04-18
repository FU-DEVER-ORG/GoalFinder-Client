import React from 'react';
import Image from 'next/image';
import { TIME_FORMAT } from '@/settings/formatDateTime';

import * as S from './datepicker.styles';

export interface DatepickerPropsStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
}

interface DatepickerProps extends DatepickerPropsStyles {
  className?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string | [string, string] | any;
  prevIcon?: JSX.Element | string;
  suffixIcon?: JSX.Element | string;
  $label?: string;
  required?: boolean;
  id?: string;
  format?: string;
  [key: string]: any;
}

const Datepicker = ({
  className,
  $label,
  type,
  disabled,
  placeholder = TIME_FORMAT.EURO_DATE_FORMAT,
  required,
  width = '100%',
  format = TIME_FORMAT.EURO_DATE_FORMAT,
  id = Math.random().toString(36).substring(2, 12),
  $prefixIcon,
  ...props
}: DatepickerProps) => {
  return (
    <S.DatepickerWrapper className={className} style={{ width: width }}>
      {$label && (
        <S.Label htmlFor={id}>
          {$label} {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}
      {type === 'range' ? (
        <S.DatepickerBox>
          {$prefixIcon && (
            <Image
              className="prefix-icon-wrapper"
              src={$prefixIcon}
              alt="icon"
              width={16}
              height={40}
            />
          )}
          <S.DatepickerRangeCommon
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            style={{ width: width }}
            format={format}
            {...props}
          />
        </S.DatepickerBox>
      ) : (
        <S.DatepickerBox>
          {$prefixIcon && (
            <Image
              className="prefix-icon-wrapper"
              src={$prefixIcon}
              alt="icon"
              width={40}
              height={40}
            />
          )}
          <S.DatepickerCommon
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            style={{ width: width }}
            format={format}
            {...props}
          />
        </S.DatepickerBox>
      )}
    </S.DatepickerWrapper>
  );
};

export default Datepicker;
