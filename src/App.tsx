import React from 'react';
import { ThemeProvider } from 'styled-components';

import * as config from 'config';
import Routes from 'routes';
import GlobalStyles from 'global.styled';

const App = () => (
  <ThemeProvider theme={config.theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

export default App;
