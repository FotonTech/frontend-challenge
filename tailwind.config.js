const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "color-placeholder": "#54565A",
      "color-text-light": "rgba(49, 49, 49, 0.6);",
      "color-text-dark": "rgba(49, 49, 49, 0.8);",
      title: "#3F4043",
      pink: "#FF6978",
      blue: "#4ABDF1",
      black: "#000",
      gray: "#BFBEBF",
    },
    backgroundColor: {
      primary: "#FFFCF9",
      white: "#fff",
      "dark-blue": "#00173D",
      purple: "#451475",
      "light-green": "#EEF5DB",
    },
    extend: {
      fontFamily: {
        sans: ["SFPro", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
