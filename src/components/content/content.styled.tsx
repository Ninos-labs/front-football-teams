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
      height: calc(100vh - 18rem);
      border-right: 1px solid ${({ theme }) => theme.colors?.gallery};
      flex-basis: 38rem;
      top: 13.8rem;
      position: sticky;
      overflow-y: scroll;
    }

    @media screen and (max-width: ${({ theme }) => theme.size?.small}) {
      margin: 0;
    }

    h2 {
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
      margin: 0 2rem;
      width: calc(100% - 4rem);
      @media screen and (min-width: ${({ theme }) => theme.size?.medium}) {
        width: calc(50% - 4rem);
      }
    }
  }
`;

export default ContentStyled;
