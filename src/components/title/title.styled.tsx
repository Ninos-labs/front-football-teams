import styled from 'styled-components';

const TitleStyled = styled.div`
  button {
    background: ${({ theme }) => theme.colors?.white};
    border: 0.1rem solid ${({ theme }) => theme.colors?.black};
    border-radius: ${({ isOpenCountriesList, theme }) =>
      isOpenCountriesList ? `${theme.radius?.big} ${theme.radius?.big} 0 0` : theme.radius?.big};
    box-sizing: border-box;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts?.sizes?.subTitle};
    text-align: left;
    outline: 0;
    padding: ${({ theme }) => theme.gutter?.small};
    width: 100%;
  }

  svg {
    transition: transform 0.3s;
    transform: rotate(
      ${({ isOpenCountriesList }: { isOpenCountriesList: boolean }) =>
        isOpenCountriesList ? '-180deg' : '0'}
    );
  }
`;

export default TitleStyled;
