import { css } from "styled-components"

const fontsStyles = css`
  /** Import Playfair Display and Roboto font faces */
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap");

  @font-face {
    font-family: "SFProDisplay";
    src: url("/fonts/SF-Pro-Display-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "SFProText";
    src: url("/fonts/SF-Pro-Text-Regular.otf") format("opentype");
  }
`

export default fontsStyles
