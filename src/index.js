import React from "react";
import ReactDOM from "react-dom";

import { Palette } from "./theme/palette";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={Palette}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
