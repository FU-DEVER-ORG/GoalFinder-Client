import { FlexProps } from 'antd';

import * as S from './styles';

interface BoxFlexProps extends FlexProps {
  children: React.ReactNode;
  padding?: string;
}

function BoxFlex({ children, padding = '20px', ...rest }: BoxFlexProps) {
  return (
    <S.BoxWrapper {...rest} $padding={padding}>
      {children}
    </S.BoxWrapper>
  );
}

export default BoxFlex;
