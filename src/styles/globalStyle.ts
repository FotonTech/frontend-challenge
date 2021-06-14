import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
  body{
    margin: 0px;
  }
  #root {
    display: flex;
    min-height: 100vh;
    margin: 0px;
    font-family: 'Source Sans Pro', sans-serif !important;
    flex-direction: column;
  }
  .MuiTypography-root{
    font-family: 'Source Sans Pro', sans-serif !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s,
    color 5000s ease-in-out 0s;
    transition-delay: background-color 5000s, color 5000s;
  }
`;
