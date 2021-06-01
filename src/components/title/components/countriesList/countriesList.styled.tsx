import styled, { keyframes } from 'styled-components';

const Appears = keyframes`
  0% { top: 8rem; }
  100% { top: 9rem; }
`;

const CountriesListStyled = styled.div`
  animation: ${Appears};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  background-color: white;
  height: calc(100vh - 9rem);
  left: 0;
  margin: auto;
  min-width: 10rem;
  padding: 1rem 2rem;
  position: absolute;
  width: calc(100% - 4rem);

  & > div {
    height: calc(100vh - 25rem);
    margin: 0 1rem;
    overflow-y: auto;
  }

  small {
    color: ${({ theme }) => theme.colors?.dustyGray};
    display: block;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  input  {
    border: 0.1rem solid ${({ theme }) => theme.colors?.gallery};
    border-radius: 0.4rem;
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 1rem;
    padding: 1rem;
    width: calc(100% - 2rem);

    &:focus {
      outline: 0;
      border-color: ${({ theme }) => theme.colors?.dustyGray};
    }
  }

  a {
    color: ${({ theme }) => theme.colors?.blueZodiac};
    border-bottom: 1px solid ${({ theme }) => theme.colors?.gallery};
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 2rem 1rem 0;
    padding: 1rem;
    text-decoration: none;
    outline: 0;
    text-transform: uppercase;

    &:last-of-type {
      border-bottom: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors?.pastelGreen};
    }
  }
`;

export default CountriesListStyled;
