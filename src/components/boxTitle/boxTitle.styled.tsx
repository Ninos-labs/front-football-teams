import styled from 'styled-components';

const BoxTitleStyled = styled.h2`
  background-color: ${({ theme }) => theme.colors?.white};
  font-size: ${({ theme }) => theme.fonts?.sizes?.subTitle};
  top: 10rem;
  padding: 0 0 2rem;
  position: sticky;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
    top: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
    top: 10rem;
  }
`;

export default BoxTitleStyled;
