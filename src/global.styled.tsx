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
      font-size: 8px;
      
      @media screen and (min-width: ${theme.size?.large}) {
        font-size: ${theme.fonts.sizes.reset};
      }
    }

    body {
      background-color: ${theme.colors.alabaster};
      color: ${theme.colors.blueZodiac};
      font-family: ${theme.fonts.family.toString()};
      font-size: ${theme.fonts.sizes.default};
      margin: 0;
    }

    * {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      
      ::-webkit-scrollbar {
        width: .1rem;
      }
  
      ::-webkit-scrollbar-track {
        background-color: ${theme.colors?.gallery};
      }
  
      ::-webkit-scrollbar-thumb {
        border: .1rem solid ${theme.colors?.dustyGray};
      } 
    }

    h1, h2 {
      font-weight: 500;
      line-height: 1.5;
      margin: 0;
    }

    #root {
      margin: 0 auto;
      max-width: 180rem;
    }
  `
);

export default GlobalStyles;
