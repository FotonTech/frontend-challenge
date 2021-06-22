import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

body {
  background-color: #FFFCF9;
}

@font-face {
    font-family: 'SFPro Display';
    src: url('SFPRO/FontsFree-Net-SFProDisplay-Medium.ttf');
    font-weight: normal,
  }

@font-face {
  font-family: 'Playfair Display';
  src: url('Playfair/PlayfairDisplay-Bold.ttf');
  font-weight: bold,
}
`;
