// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
   backgroundColor: "#F2F2F2",
   textRed: "#FF6978",
   brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
   },
};

const fonts = {
   body: "sf_pro_display, sans-serif",
   heading: "sf_pro_display, serif",
   mono: "Menlo, monospace",
   text: "sans-serif",
};

const theme = extendTheme({ colors, fonts });

export default theme;
