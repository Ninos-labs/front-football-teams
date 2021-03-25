import styled from 'styled-components';

const TitleStyled = styled.div`
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts?.sizes?.title};
    outline: 0;
    padding: 0;
  }

  svg {
    transition: transform 0.3s;
    transform: rotate(
      ${({ isOpenCountriesList }: { isOpenCountriesList: boolean }) =>
        isOpenCountriesList ? '-180deg' : '0'}
    );
  }

  p {
    color: ${({ theme }) => theme.colors?.dustyGray};
    display: block;
    font-size: ${({ theme }) => theme.fonts?.sizes?.subTitle};
    margin: 0.4rem 0 0;
  }
`;

export default TitleStyled;
