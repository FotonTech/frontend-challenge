import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: '#FEFAF6',
    highlight: "#FF6978",
    link: '#4ABDF1',
    black: '#000',
    white: {
      100: '#FEFEFE',
      300: '#E7E7E1'
    },
    text: {
      300: '#C8C8C8',
      500: '#54565A',
      600: '#3F4043',
      700: '#313131',
      800: '#74776D',
    },
    title: {
      500: '#36383A',
      700: '#2A2B26',
    },
  },
  fonts: {
    heading: `SFProDisplay, Roboto, sans-serif`,
    body: `SFProDisplay, Roboto, sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text.600',
      },
      a: {
        cursor: 'pointer'
      }
    }
  }
})
