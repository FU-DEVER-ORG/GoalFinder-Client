import { createGlobalStyle, css } from "styled-components";
import { Inter } from "next/font/google";

import { utility } from "./utility";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const reset = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: ${inter.style.fontFamily};
    aspect-ratio: none;
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
    content: "";
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
`;

const typoraphy = css`
  .caption {
    padding-left: 15px;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: ${({ theme }) => theme?.fontSize.md};
    line-height: 24px;
    letter-spacing: 0;
  }
  .user-name {
    font-weight: ${({ theme }) => theme?.fontWeight.bold};
    font-size: ${({ theme }) => theme?.fontSize.xxl};
    line-height: 24px;
    letter-spacing: 0;
  }
  .option {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: ${({theme}) => theme.radius.normalRadius};
    width: 100%;
    font-size: ${({theme}) => theme.fontSize.xl};
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    color:  ${({theme}) => theme.colors.secondaryLightText};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.secondaryConponentsLightBackground};
        color : ${({theme}) => theme.colors.primaryLightText}
    }
  }
  .thumnail {
  }
`;
const button = css`
    .btn-active{
        transition: all 0.8s ease-out ;
        &:hover{
            background-color: ${({theme}) => theme.colors.tertiaryLightBackground};
            transition: all 0.2s ease-in ;
        }
    }
`
const GlobalStyle = createGlobalStyle`
    ${reset}
    ${typoraphy}
    ${button}
`;
export default GlobalStyle;
