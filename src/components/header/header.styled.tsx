import styled from 'styled-components';

const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors?.gallery};
  display: flex;
  gap: 2rem;
  top: 0;
  padding: 2rem;

  h1 {
    flex-basis: 36rem;
  }

  div {
    flex: auto;
  }
`;

export default HeaderStyled;
