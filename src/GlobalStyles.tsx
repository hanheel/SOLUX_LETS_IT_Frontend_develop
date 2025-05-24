/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const resetCss = css`
  html,
  body,
  div,
  span,
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
  address,
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
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
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
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const themeVariables = css`
  @font-face {
    font-family: 'SUIT';
    src: url('/fonts/SUIT-Variable.woff2') format('woff2-variations');
    font-weight: 100 900; 
    font-style: normal;
    font-display: swap;
  }
  :root {
/** TODO : 디자인 시스템 맞춰서 수정 */
    --color-primary: #1E5EFF;
    --color-secondary: #EBEFFF;
    --color-white: #ffffff;

    --color-light-grey: #f5f5f5;
    --color-grey: #acacae;
    --color-dark-grey: #4f5457;
    --color-black: #000;

    --font-family: 'SUIT';

    /* Headline */
    --font-size-title: 28px;
    --font-weight-title: 700; 
    
    /* Subtitle (H2) */
    --font-size-subtitle: 22px;
    --font-weight-subtitle: 600; 
    
    /* Body */
    --font-size-body-large: 16px;
    --font-weight-body-large: 500;
    --line-height-body-large: 150%;
    
    --font-size-body-regular: 15px;
    --font-weight-body-regular: 400;
    --line-height-body-regular: 160%;
    
    /* Caption */
    --font-size-caption: 12px;
    --font-weight-caption: 400;
    --line-height-caption: 160%;
    
    /* Button */
    --font-size-button-primary: 16px;
    --font-weight-button-primary: 500;
    --line-height-button-primary: 120%;
    
    /* Input Label */
    --font-size-label-input: 14px;
    --font-weight-label-input: 400; 
    --line-height-label-input: 140%;
    

    --height-header: 66px;
    --max-width-container: 430px;

    --z-index-header: 3;
    --z-index-toast: 2;
    --z-index-select: 1;
    --z-index-modal-background: 50;
    --z-index-modal: 100;
  }
`;

const GlobalStyle = () => <Global styles={[resetCss, themeVariables]} />;

export default GlobalStyle;
