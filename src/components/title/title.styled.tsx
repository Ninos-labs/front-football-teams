import styled from 'styled-components';

const TitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.fonts?.sizes?.title};
  line-height: 1.5;

  span {
    color: ${({ theme }) => theme.colors?.dustyGray};
    display: block;
    font-size: ${({ theme }) => theme.fonts?.sizes?.subTitle};
  }
`;

export default TitleStyled;
