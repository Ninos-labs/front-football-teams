import styled from 'styled-components';

const BoxTitleStyled = styled.h2`
  background-color: inherit;
  font-size: ${({ theme }) => theme.fonts?.sizes?.subTitle};
  padding: 0 0 2rem;
  z-index: 1;
`;

export default BoxTitleStyled;
