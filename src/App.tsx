import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import * as config from 'config';
import GlobalStyles from 'global.styled';

const App: FC = () => (
  <ThemeProvider theme={config.theme}>
    <GlobalStyles />
    <div>Hello React App!</div>
  </ThemeProvider>
);

export default App;
