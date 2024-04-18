import { createGlobalStyle, css } from 'styled-components';

import { utility } from './utility';

export const calculateLetterSpacing = (
  fontSize: string,
  percent: number = 0.02,
) => {
  const fontSizeNumber = parseFloat(fontSize);
  return `${fontSizeNumber * percent}px`;
};

const fontFamily = css`
/* font-family: 'Inter'; */
  /* @font-face {
    font-family: 'FontinSans';
    src: url('/fonts/FontinSans-Regular.otf') format('opentype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'FontinSans';
    src:
      local('Fontin Sans Bold'),
      local('Fontin-Sans-Bold'),
      url('/fonts/FontinSansCR-Bold.woff2') format('woff2'),
      url('/fonts/FontinSansCR-Bold.woff') format('woff'),
      url('/fonts/FontinSansCR-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  } */
`;

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'FontinSans'; */
    font-weight: 400;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea,
  input {
    outline: none !important;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none !important;
  }

  html {
    visibility: visible;
    opacity: 1;
  }

  a {
    color: unset !important;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

const typography = css`
  .display {
    /* font-family: 'FontinSans-Bold'; */
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 64px;
    line-height: 80px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.xxxl, 0.12)};
    color: ${({ theme }) => theme.colors.newtralLightest};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(64px * 0.8);
      line-height: calc(80px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(64px * 0.6);
      line-height: calc(80px * 0.6);
    }
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    line-height: 50px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.xxxl, 0.08)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.xxxl} * 0.8);
      line-height: calc(50px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.xxxl} * 0.6);
      line-height: calc(50px * 0.6);
    }
  }

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 40px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.xxl, 0.06)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.xxl} * 0.8);
      line-height: calc(40px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.xxl} * 0.6);
      line-height: calc(40px * 0.6);
    }
  }

  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 30px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.xl, 0.08)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.xl} * 0.8);
      line-height: calc(30px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.xl} * 0.6);
      line-height: calc(30px * 0.6);
    }
  }

  h4 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 28px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.md, 0.04)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.md} * 0.8);
      line-height: calc(28px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.md} * 0.6);
      line-height: calc(28px * 0.6);
    }
  }

  h5 {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 28px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.lg, 0.02)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.lg} * 0.8);
      line-height: calc(28px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.lg} * 0.6);
      line-height: calc(28px * 0.6);
    }
  }

  .body-text-bold {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 24px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.base, 0.06)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.base} * 0.8);
      line-height: calc(24px * 0.8);
    }

    /* @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.base} * 0.6);
      line-height: calc(24px * 0.6);
    } */
  }

  .body-text-normal {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 24px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.base, 0.06)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.base} * 0.8);
      line-height: calc(24px * 0.8);
    }

    /* @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.base} * 0.6);
      line-height: calc(24px * 0.6);
    } */
  }

  .body-text-small-bold {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 20px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.base, 0.04)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.sm} * 0.8);
      line-height: calc(20px * 0.8);
    }

    /* @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.sm} * 0.6);
      line-height: calc(20px * 0.6);
    } */
  }

  .body-text-small-normal {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 20px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.base, 0.04)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.sm} * 0.8);
      line-height: calc(20px * 0.8);
    }

    /* @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.sm} * 0.6);
      line-height: calc(20px * 0.6);
    } */
  }

  .caption-normal {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 24px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.md, 0.02)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.md} * 0.8);
      line-height: calc(24px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.md} * 0.6);
      line-height: calc(24px * 0.6);
    }
  }

  .caption-small {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 20px;
    letter-spacing: ${({ theme }) =>
      calculateLetterSpacing(theme.fontSize.base, 0.02)};

    @media ${({ theme }) => theme.breakpoints.mdMax} {
      font-size: calc(${({ theme }) => theme.fontSize.base} * 0.8);
      line-height: calc(20px * 0.8);
    }

    @media ${({ theme }) => theme.breakpoints.xsMax} {
      font-size: calc(${({ theme }) => theme.fontSize.base} * 0.6);
      line-height: calc(20px * 0.6);
    }
  }
`;

const scrollApp = css`
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a0a0a5;
    border-radius: 16px;
    z-index: 1000;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  ${fontFamily}
  
  ${typography}
  ${utility.checkbox}
  ${utility.radioButton}
  ${utility.select}
  ${utility.switchToggle}
  ${utility.input}
  ${scrollApp}
`;

export default GlobalStyle;
