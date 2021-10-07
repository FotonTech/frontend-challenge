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
      cloud: "#fefefe",
      title: "#3F4043",
      pink: "#FF6978",
      blue: "#4ABDF1",
      black: "#000",
      gray: "#BFBEBF",
      "card-gray": "#E7E7E1",
    },
    borderColor: {
      menu: "rgba(151, 151, 151, 0.2)",
    },
    backgroundColor: {
      primary: "#fefaf6",
      white: "#fff",
      "dark-blue": "#00173D",
      purple: "#451475",
      "light-green": "#EEF5DB",
      cloud: "#FDFCFC",
    },
    extend: {
      fontFamily: {
        sans: ["SFPro", ...fontFamily.sans],
      },
      backgroundImage: {
        circle: "url('/images/circle.svg')",
        currentlyReading: "url('/images/currentlyReadingBackground.svg')",
        bookBackground: "url('/images/bookBackground.png')",
        bookBackgroundDesktop: "url('/images/bookBackgroundDesktop.png')",
      },
      backgroundPosition: {
        "minus-top-right": "top -20px right -33px",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, 100px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
