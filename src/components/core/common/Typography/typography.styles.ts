import { styled, css } from 'styled-components';

export const H1 = styled.h1<{
  $color?: string;
  $padding?: string;
  $margin?: string;
  $fontFamily?: string;
  $transform?: string;
  $align?: string;
  $style?: string;
  $textDecoration?: string;
}>`
  text-transform: ${(props) => props.$transform};
  text-align: ${(props) => props?.$align};

  color: ${(props) => props.$color || props.theme.colors.newtral};
  font-family: ${(props) => props.$fontFamily};
  font-style: ${(props) => props.$style};
  text-decoration: ${(props) => props.$textDecoration};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H2 = styled.h2<{
  $color?: string;
  $padding?: string;
  $margin?: string;
  $fontFamily?: string;
  $transform?: string;
  $align?: string;
  $style?: string;
  $textDecoration?: string;
}>`
  text-transform: ${(props) => props.$transform};
  text-align: ${(props) => props?.$align};

  color: ${(props) => props.$color || props.theme.colors.newtral};
  font-family: ${(props) => props.$fontFamily};
  font-style: ${(props) => props.$style};
  text-decoration: ${(props) => props.$textDecoration};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H3 = styled.h3<{
  $color?: string;
  $padding?: string;
  $margin?: string;
  $fontFamily?: string;
  $transform?: string;
  $align?: string;
  $style?: string;
  $textDecoration?: string;
}>`
  text-transform: ${(props) => props.$transform};
  text-align: ${(props) => props?.$align};

  color: ${(props) => props.$color || props.theme.colors.newtral};
  font-family: ${(props) => props.$fontFamily};
  font-style: ${(props) => props.$style};
  text-decoration: ${(props) => props.$textDecoration};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H4 = styled.h4<{
  $color?: string;
  $padding?: string;
  $margin?: string;
  $fontFamily?: string;
  $transform?: string;
  $align?: string;
  $style?: string;
  $textDecoration?: string;
}>`
  text-transform: ${(props) => props.$transform};
  text-align: ${(props) => props?.$align};

  color: ${(props) => props.$color || props.theme.colors.newtral};
  font-family: ${(props) => props.$fontFamily};
  font-style: ${(props) => props.$style};
  text-decoration: ${(props) => props.$textDecoration};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H5 = styled.h5<{
  $color?: string;
  $padding?: string;
  $margin?: string;
  $fontFamily?: string;
  $transform?: string;
  $align?: string;
  $style?: string;
  $textDecoration?: string;
}>`
  text-transform: ${(props) => props.$transform};
  text-align: ${(props) => props?.$align};

  color: ${(props) => props.$color || props.theme.colors.newtral};
  font-family: ${(props) => props.$fontFamily};
  font-style: ${(props) => props.$style};
  text-decoration: ${(props) => props.$textDecoration};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const P = styled.p<{
  $color?: string;
  $padding?: string;
  $margin?: string;
  $fontFamily?: string;
  $transform?: string;
  $align?: string;
  $style?: string;
  $textDecoration?: string;
}>`
  text-transform: ${(props) => props.$transform};
  text-align: ${(props) => props?.$align};

  color: ${(props) => props.$color || props.theme.colors.newtral};
  font-family: ${(props) => props.$fontFamily};
  font-style: ${(props) => props.$style};
  text-decoration: ${(props) => props.$textDecoration};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;
