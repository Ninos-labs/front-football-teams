import styled from 'styled-components';

const FinalResultsStyled = styled.div`
  background-color: ${({ theme }) => theme.colors?.alabaster};
  border-radius: ${({ theme }) => theme.radius?.big};
  flex-basis: 6rem;
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 1rem;
  min-width: 6rem;
  padding: 1.2rem 0;
  position: relative;

  &:before {
    content: '';
    border-radius: 100%;
    display: block;
    height: 1rem;
    top: -0.4rem;
    left: -0.4rem;
    position: absolute;
    width: 1rem;
  }

  &[data-result='Win']:before {
    background-color: ${({ theme }) => theme.colors?.pastelGreen};
  }

  &[data-result='Loss']:before {
    background-color: ${({ theme }) => theme.colors?.japonica};
  }

  &[data-result='Draw']:before {
    display: none;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    place-content: space-around;
  }

  li {
    list-style: none;
  }
`;

export default FinalResultsStyled;
