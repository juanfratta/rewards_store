const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`* {
    box-sizing: border-box;
  }
 
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #616161;
  }
`;

export default GlobalStyle;
