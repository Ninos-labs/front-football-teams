import styled from 'styled-components';

const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors?.gallery};
  display: flex;
  top: 0;
  padding: 0 1.5rem;
  position: sticky;
  z-index: 2;

  @media screen and (max-width: ${({ theme }) => theme.size?.medium}) {
    flex-flow: wrap;
  }

  div {
    flex: auto;

    &:first-of-type {
      flex-basis: 19rem;

      @media screen and (max-width: ${({ theme }) => theme.size?.large}) {
        flex-basis: 100%;
      }
    }
  }
`;

export default HeaderStyled;
