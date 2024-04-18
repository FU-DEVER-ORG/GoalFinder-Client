import React from 'react';

import * as S from './timepicker.styles';

export interface TimepickerPropsStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
}

interface TimepickerProps extends TimepickerPropsStyles {
  onChange?: () => void;
  className?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  prevIcon?: JSX.Element | string;
  suffixIcon?: JSX.Element | string;
  label?: string;
  required?: boolean;
  id?: string;
  [key: string]: any;
}

const Timepicker = ({
  className,
  label,
  type,
  disabled,
  placeholder,
  required,
  width = '100%',
  id = Math.random().toString(36).substring(2, 12),
  ...props
}: TimepickerProps) => {
  return (
    <S.TimepickerWrapper className={className} style={{ width: width }}>
      {label && (
        <S.Label htmlFor={id}>
          {label} {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}
      {type === 'range' ? (
        <S.TimepickerRangeCommon
          id={id}
          disabled={disabled}
          style={{ width: width }}
          {...props}
        />
      ) : (
        <S.TimepickerCommon
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          style={{ width: width }}
          {...props}
        />
      )}
    </S.TimepickerWrapper>
  );
};

export default Timepicker;
