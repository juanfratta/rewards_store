import React from 'react';
import ReactDOM from 'react-dom';

import { RewardStoreProvider } from './contexts/context';
import { ThemeProvider } from 'styled-components';

import { Palette } from './theme/palette';
import GlobalStyle from './theme/GlobalStyle';

import App from './App';

ReactDOM.render(
  <RewardStoreProvider>
    <ThemeProvider theme={Palette}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RewardStoreProvider>,
  document.getElementById('root')
);
