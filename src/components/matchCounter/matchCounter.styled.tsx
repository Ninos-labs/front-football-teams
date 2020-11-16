import styled from 'styled-components';

import { MatchCounterStyledTypeS } from './matchCounter.types';

const MatchCounterStyled = styled.div`
  background-color: ${({ theme, isTotal }: MatchCounterStyledTypeS) =>
    isTotal ? theme.colors?.pastelGreen : theme.colors?.alabaster};
  border-radius: ${({ theme }) => theme.radius?.big};
  color: ${({ theme, isTotal }: MatchCounterStyledTypeS) =>
    isTotal ? theme.colors?.white : theme.colors?.blueZodiac};
  line-height: 1;
  padding: ${({ theme }) => theme.gutter?.small};

  h4 {
    font-size: ${({ theme }) => theme.fonts?.sizes?.default};
    margin: 0;
    text-transform: uppercase;
  }

  h5 {
    font-size: ${({ theme }) => theme.fonts?.sizes?.percentage};
    font-weight: 400;
    margin: ${({ theme }) => `${theme.gutter?.small} 0 0`};
  }

  small {
    font-size: ${({ theme }) => theme.fonts?.sizes?.small};
  }

  progress[value] {
    appearance: none;
    border: none;
    height: 4px;
    width: 100%;

    &::-webkit-progress-value {
      background-color: ${({ theme }) => theme.colors?.pastelGreen};
      border-radius: ${({ theme }) => theme.radius?.small};
    }

    &::-moz-progress-bar {
      background-color: ${({ theme }) => theme.colors?.pastelGreen};
      border-radius: ${({ theme }) => theme.radius?.small};
    }

    &::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.colors?.white};
      box-shadow: 0;
      border-radius: ${({ theme }) => theme.radius?.small};
    }
  }
`;

export default MatchCounterStyled;