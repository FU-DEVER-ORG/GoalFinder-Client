import { ButtonProps } from 'antd';

import * as S from './button.styles';

export interface ButtonPropsInterface extends ButtonProps {
  $color?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $backgroundColor?: string;
  $borderColor?: string;
  $padding?: string;
  $margin?: string;
  $isOutline?: boolean;
  $width?: string | number;
  $iconBefore?: string;
  $borderRadius?: string;
  $isCancel?: boolean;
  $full?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonPropsInterface) => {
  return <S.ButtonCommon {...props}>{children}</S.ButtonCommon>;
};

export default Button;
