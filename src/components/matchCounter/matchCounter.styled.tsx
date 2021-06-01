import styled from 'styled-components';

import { MatchCounterStyledTypeS } from './matchCounter.types';

const MatchCounterStyled = styled.div`
  background-color: ${({ theme, isTotal }: MatchCounterStyledTypeS) =>
    isTotal ? theme.colors?.pastelGreen : theme.colors?.white};
  color: ${({ theme, isTotal }: MatchCounterStyledTypeS) =>
    isTotal ? theme.colors?.white : theme.colors?.blueZodiac};
  line-height: 1;
  padding: ${({ theme }) => theme.gutter?.small};

  h4 {
    font-size: 1rem;
    margin: 0;

    @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
      font-size: ${({ theme }) => theme.fonts?.sizes?.default};
    }
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1.2rem 0 0;

    @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
      font-size: ${({ theme }) => theme.fonts?.sizes?.percentage};
    }
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
