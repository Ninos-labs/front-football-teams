import { createGlobalStyle } from 'styled-components';

import { themeTypes } from 'config';

const GlobalStyles = createGlobalStyle(
  ({ theme }: { theme: themeTypes }) => `
    *, 
    *:after, 
    *:before {
      box-sizing: inherit;
    }

    html {
      font-size: ${theme.fonts.sizes.reset};
    }

    body {
      color: ${theme.colors.blueZodiac};
      font-family: ${theme.fonts.family.toString()};
      font-size: ${theme.fonts.sizes.default};
    }
  `
);

export default GlobalStyles;
