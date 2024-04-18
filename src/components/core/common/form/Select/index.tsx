import { SelectProps as SelectPropsFromAntd } from 'antd';

import themeColors from '@/style/themes/default/colors';

import Typography from '../../Typography';

import * as S from './select.styles';

interface SelectProps extends SelectPropsFromAntd {
  label?: string;
  prefixIcon?: React.ReactNode;
  isRequired?: boolean;
  colorLabel?: string;
}

export default function Select({
  label,
  prefixIcon,
  isRequired = false,
  colorLabel = themeColors.newtral,
  ...rest
}: SelectProps) {
  return (
    <S.WrapSelect>
      {label && (
        <Typography
          padding="0 0 8px 0"
          variant="caption-small"
          color={colorLabel}
        >
          {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}
      {prefixIcon && <S.PrefixIcon>{prefixIcon}</S.PrefixIcon>}
      <S.Select $isPrefixIcon={prefixIcon ? true : false} {...rest} />
    </S.WrapSelect>
  );
}
