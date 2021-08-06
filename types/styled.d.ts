import "styled-components"

type Colors = {
  background: string
  special: string
  text: string
  background: string
  primary: string
  heading: string
}

type Fonts = {
  body: string
  heading1: string
  heading2: string
  heading3: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors
    fonts: Fonts
  }
}
