import { createGlobalStyle } from 'styled-components';
import SFProDisplay700Otf from './fonts/SF-Pro-Display-Bold.otf';
import SFProDisplay500Otf from './fonts/SF-Pro-Display-Medium.otf';
import SFProDisplay400Woff2 from './fonts/SF-Pro-Display-Regular.woff2';
import SFProDisplay400ItalicOtf from './fonts/SF-Pro-Display-RegularItalic.otf';
import SFProDisplay600Otf from './fonts/SF-Pro-Display-Semibold.otf';
import SFProText700Otf from './fonts/SF-Pro-Text-Bold.otf';
import SFProText500Otf from './fonts/SF-Pro-Text-Medium.otf';
import SFProText400Woff2 from './fonts/SF-Pro-Text-Regular.woff2';
import SFProText600Otf from './fonts/SF-Pro-Text-Semibold.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: normal;
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplay400Woff2}) format('woff2');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: italic;
    font-weight: normal;
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplay400ItalicOtf}) format('otf');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: medium;
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplay500Otf}) format('otf');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplay600Otf}) format('otf');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: bold;
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplay700Otf}) format('otf');
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: normal;
    src: local('SF Pro Text'), local('SFProText'), url(${SFProText400Woff2}) format('woff2');
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    src: local('SF Pro Text'), local('SFProText'), url(${SFProText500Otf}) format('otf');
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    src: local('SF Pro Text'), local('SFProText'), url(${SFProText600Otf}) format('otf');
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: bold;
    src: local('SF Pro Text'), local('SFProText'), url(${SFProText700Otf}) format('otf');
  }
`;

export default GlobalStyle;
