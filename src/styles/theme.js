import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    textHeader: "#3F4043",
    textPrimary: "#313131",
    textSecondary: "#54565A",
    textHighlight: "#FF6978",
    textBlue: '#4ABDF1',
    background: "#FEFAF6",
    white: '#FFF',
    black: '#000',
  },
  fonts: {
    heading: 'SFProDisplay',
    body: 'SFProDisplay'
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'textSecondary',
      }
    }
  }
})
