import { createMuiTheme, Theme } from '@material-ui/core/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    palette: typeof styledTheme.palette;
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0088D3',
    },
    secondary: {
      main: '#BFBEBF',
      light: '#DCD8D8',
      dark: '#3F4043',
    },
  },
  typography: {
    fontSize: 14,
  },
  spacing: 8,
});

export const styledTheme = {
  ...theme,
  palette: {
    ...theme.palette,
  },
};

export default theme;
