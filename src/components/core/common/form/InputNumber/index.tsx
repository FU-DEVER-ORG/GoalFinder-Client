import { InputNumberProps } from 'antd';

import themeColors from '@/style/themes/default/colors';

import Typography from '../../Typography';

import * as S from './input-number.styles';

interface InputProps extends InputNumberProps {
  label?: string;
  isRequired?: boolean;
  colorLabel?: string;
}

export default function InputNumber({
  label,
  isRequired = false,
  colorLabel = themeColors.newtral,
  ...rest
}: InputProps) {
  return (
    <S.WrapInput>
      {label && (
        <Typography
          padding="0 0 8px 0"
          variant="caption-small"
          color={colorLabel}
        >
          {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}
      <S.InputNumber {...rest} />
    </S.WrapInput>
  );
}
