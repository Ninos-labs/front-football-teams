import styled from 'styled-components';

const ContentStyled = styled.div`
  display: flex;
  height: min-content;
  top: 0;

  @media screen and (max-width: ${({ theme }) => theme.size?.large}) {
    flex-direction: column-reverse;
  }

  aside,
  main {
    padding: 0 2rem;
  }

  aside {
    @media screen and (max-width: ${({ theme }) => theme.size?.large}) {
      margin: 0 2rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
      height: calc(100vh - 15rem);
      flex-basis: 38rem;
      top: 10rem;
      position: sticky;
      overflow: hidden;
    }

    @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
      margin: 0;
    }

    h2 {
      padding-top: 2rem;
      background-color: ${({ theme }) => theme.colors?.alabaster};

      @media screen and (max-width: ${({ theme }) => theme.size?.medium}) {
        border-top: 1px solid ${({ theme }) => theme.colors?.gallery};
      }
    }
  }

  main {
    @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
      flex-basis: calc(100% - 38rem);
    }

    @media screen and (min-width: ${({ theme }) => theme.size?.medium}) {
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
      padding: 0;
    }

    section {
      background-color: ${({ theme }) => theme.colors?.white};
      box-sizing: border-box;
      border-radius: ${({ theme }) => theme.radius?.big};
      margin: 2rem;
      padding: 3rem;
      width: calc(100% - 4rem);
      @media screen and (min-width: ${({ theme }) => theme.size?.medium}) {
        width: calc(50% - 4rem);
      }
    }
  }
`;

export default ContentStyled;
