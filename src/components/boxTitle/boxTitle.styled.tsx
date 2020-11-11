import styled from 'styled-components';

const BoxTitleStyled = styled.h2`
  background-color: ${({ theme }) => theme.colors?.white};
  font-size: ${({ theme }) => theme.fonts?.sizes?.subTitle};
  top: 0;
  padding: 2rem 0;
  position: sticky;
  z-index: 1;
`;

export default BoxTitleStyled;
