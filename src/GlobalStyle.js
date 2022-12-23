import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
