import styled from 'styled-components';

const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors?.gallery};
  display: flex;
  top: 0;
  padding: 2rem 1.5rem;
  position: sticky;
  z-index: 2;

  @media screen and (max-width: ${({ theme }) => theme.size?.medium}) {
    flex-flow: wrap;
  }

  & > * {
    margin: 0.5rem;
  }

  h1 {
    @media screen and (min-width: ${({ theme }) => theme.size?.medium}) {
      flex-basis: 36rem;
    }
  }

  div {
    flex: auto;
  }
`;

export default HeaderStyled;
