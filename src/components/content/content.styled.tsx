import styled from 'styled-components';

const ContentStyled = styled.div`
  display: flex;
  gap: 2rem;

  aside,
  main {
    padding: 0 2rem;
  }

  aside {
    border-right: 1px solid ${({ theme }) => theme.colors?.gallery};
    flex-basis: 38rem;
    height: calc(100vh - 18rem);
    top: 13.8rem;
    overflow-y: scroll;
    position: sticky;
  }

  main {
    flex-basis: calc(100% - 38rem);
  }
`;

export default ContentStyled;
