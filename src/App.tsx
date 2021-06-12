import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme, { styledTheme } from './styles/theme';
import Routes from './routes/Routes';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={styledTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
