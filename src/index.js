import React from 'react';
import ReactDOM from 'react-dom';

import { ProductsProvider } from './contexts/products/context';
import { ThemeProvider } from 'styled-components';

import { Palette } from './theme/palette';
import GlobalStyle from './theme/GlobalStyle';

import App from './App';

ReactDOM.render(
  <ProductsProvider>
    <ThemeProvider theme={Palette}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ProductsProvider>,
  document.getElementById('root')
);
