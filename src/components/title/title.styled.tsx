import styled from 'styled-components';

const TitleStyled = styled.div`
  button {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors?.blueZodiac};
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
`;

export default TitleStyled;
