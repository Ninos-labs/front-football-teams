import styled, { keyframes } from 'styled-components';

const Appears = keyframes`
  0% { top: 3rem; }
  100% { top: 4.92rem; }
`;

const CountriesListStyled = styled.div`
  animation: ${Appears};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  background-color: ${({ theme }) => theme.colors?.alabaster};
  border: 1px solid ${({ theme }) => theme.colors?.black};
  border-radius: ${({ theme }) => `0 0 ${theme.radius?.big} ${theme.radius?.big}`};
  box-sizing: border-box;
  left: 2rem;
  margin: auto;
  min-width: 10rem;
  padding: 1rem;
  position: absolute;
  width: calc(100% - 4rem);
  z-index: 2;

  & > div {
    height: auto;
    max-height: calc(100vh - 25rem);
    margin: 0 1rem;
    overflow-y: auto;

    @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
      max-height: 30rem;
    }
  }

  small {
    color: ${({ theme }) => theme.colors?.dustyGray};
    display: block;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  input  {
    border: 0.1rem solid ${({ theme }) => theme.colors?.black};
    border-radius: ${({ theme }) => theme.radius?.big};
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
    display: block;
    font-size: 1.4rem;
    margin-right: 2rem;
    padding: 1rem 0.5rem;
    text-decoration: none;
    outline: 0;

    &:last-of-type {
      border-bottom: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors?.pastelGreen};
    }
  }
`;

export default CountriesListStyled;
