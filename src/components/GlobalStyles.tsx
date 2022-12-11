import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(230, 125, 34, 0.5);
}

  html {
    font-size: 62.5%;
    overflow-x: hidden;

    @media (max-width: 1200px){
      font-size: 56.25%;
    }
  }

  body {
    line-height: 1;
    font-family: 'Josefin Sans', sans-serif;
    overflow-x: hidden;
  }

  a {
    color: #333;
    text-decoration: none;
  }
`;

export default GlobalStyles;
