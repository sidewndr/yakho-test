import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    
    &, &:before, &:after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`