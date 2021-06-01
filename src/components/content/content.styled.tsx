import styled from 'styled-components';

const ContentStyled = styled.div`
  display: flex;
  height: min-content;
  top: 0;

  @media screen and (max-width: ${({ theme }) => theme.size?.large}) {
    flex-wrap: wrap;
  }

  aside {
    padding: 0 2rem;

    @media screen and (max-width: ${({ theme }) => theme.size?.large}) {
      flex-basis: 100%;
    }

    @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
      height: calc(100vh - 15rem);
      flex-basis: 23rem;
      top: 4rem;
      position: sticky;
    }

    @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
      margin: 0;
    }

    h2 {
      padding-top: 2rem;
      background-color: ${({ theme }) => theme.colors?.alabaster};
    }
  }

  main {
    align-items: flex-start;
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
      flex-basis: calc(100% - 23rem);
    }

    @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
      padding: 0;
    }

    & > * {
      @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
        flex-basis: 100%;
      }
    }

    & > div {
      width: calc(60% - 2rem);

      @media screen and (min-width: ${({ theme }) => theme.size?.xl}) {
        width: calc(70% - 2rem);
      }
    }

    & > section {
      top: 4rem;
      position: sticky;
      width: calc(40% - 2rem);

      @media screen and (min-width: ${({ theme }) => theme.size?.xl}) {
        width: calc(30% - 2rem);
      }
    }

    section {
      background-color: ${({ theme }) => theme.colors?.white};
      box-sizing: border-box;
      border-radius: ${({ theme }) => theme.radius?.big};
      margin: 2rem 0;
      padding: 3rem;
    }
  }
`;

export default ContentStyled;
