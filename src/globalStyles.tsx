import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro';
    src: local('SF Pro'), local('SFPro'),
        url('./fonts/SF-Pro.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Pro Text';
    src: local('SF Pro Text'), local('SFProText'),
        url('./fonts/SF-Pro-Text-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;
