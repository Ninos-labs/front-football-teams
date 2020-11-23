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
      margin: 0;      
    }

    * {
      scroll-behavior: smooth;

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

    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      section {
        margin: 0 20px;
        width: calc(50% - 40px);
      }
    }
  `
);

export default GlobalStyles;
