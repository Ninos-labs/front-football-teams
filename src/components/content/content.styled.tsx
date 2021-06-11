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
      align-content: stretch;
      display: inline-flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 2rem;
      position: relative;
    }

    @media screen and (min-width: ${({ theme }) => theme.size?.large}) {
      height: calc(100vh - 15rem);
      flex-basis: 23rem;
      top: 2rem;
      position: sticky;
    }

    header {
      flex-basis: 100%;
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

    & > div:first-of-type {
      width: calc(60% - 2rem);

      @media screen and (min-width: ${({ theme }) => theme.size?.xl}) {
        width: calc(70% - 2rem);
      }

      section {
        margin: 2rem 0;
      }

      section > div {
        background-color: ${({ theme }) => theme.colors?.white};
        border-radius: ${({ theme }) => theme.radius?.big};
        border: 1px solid ${({ theme }) => theme.colors.black};
        padding: 2rem;
      }
    }

    & > div:last-of-type {
      top: 2rem;
      position: sticky;
      width: calc(40% - 2rem);

      @media screen and (min-width: ${({ theme }) => theme.size?.xl}) {
        width: calc(30% - 2rem);
      }
    }

    section {
      box-sizing: border-box;
      padding: 0 2rem;
    }
  }
`;

export default ContentStyled;
