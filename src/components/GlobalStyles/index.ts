import styled, { createGlobalStyle } from "styled-components";
import colors from "../../utils/colors";

export const GlobalStyle = createGlobalStyle` 
  body {
    background-color: ${colors.primary};
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 62.5%;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  *:focus {
    outline: none;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const ScreenContainer = styled.main`
  min-height: 100%;
  width: 420px;
`;
