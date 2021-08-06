import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
  /** Reset user-agent css */
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /** Custom global styles */
  body {
    padding-bottom: 80px;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    font-size: 16px;
    line-height: 18px;
  }

  h1, h2 {
    font-family: ${theme.fonts.body};
    margin-bottom: 8px;
  }

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading1}
  }

  h2 {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.5px;
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.heading2}
  }

  h3 {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.5px;
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.heading3}
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    cursor: pointer;
  }

  a, a:link, a:visited, a:focus, a:hover, a:active{
    text-decoration:none; 
  }

  * {
    box-sizing: border-box;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`
)

export default GlobalStyle
