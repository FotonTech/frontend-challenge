import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "SF Pro Display";
    src: url("/fonts/FontsFree-Net-SFProDisplay-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "SF Pro Display";
    src: url("/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf");
    font-style: medium;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: "SFProText";
    src: url("/fonts/FontsFree-Net-SFProText-Regular.ttf");
    font-style: medium;
    font-weight: 400;
    font-display: swap;
  }

  :root{
    --background: #F2F2F2;

    --placeholder: #54565A;

    --redtitle: #FF6978;

    --link: #4ABDF1;

    --title: #3F4043;

    --circlebackground: #FFF6E5;

    --circle: #00173D;

    --white: #ffffff;
  }

  @media (max-width: 1080px){
      html{
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  body{
      background: var(---background);
      color: var(--title);
  }

  body, input, textarea, select, button{
      font: 400 1rem "SF Pro Display", sans-serif;
  }

  button{
      cursor: pointer;
  }

  a{
      color: inherit;
      text-decoration: none;
  }
`;
