import { InputProps as InputPropsFromAntd } from 'antd';

import themeColors from '@/style/themes/default/colors';

import Typography from '../../Typography';

import * as S from './input.styles';

interface InputProps extends InputPropsFromAntd {
  label?: string;
  isRequired?: boolean;
  colorLabel?: string;
}

export default function Input({
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
      <S.Input {...rest} />
    </S.WrapInput>
  );
}
