import styled from 'styled-components';

const StyledPopup = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  border: 0.1rem solid ${({ theme }) => theme.colors?.blueZodiac};
  border-radius: ${({ theme }) => theme.radius?.big};
  bottom: -0.1rem;
  height: 420px;
  left: -0.1rem;
  right: -0.1rem;
  top: -0.1rem;
  margin: auto;
  max-width: 44rem;
  padding: 2rem;
  position: fixed;
  width: 80%;
  z-index: 2;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    position: sticky;
    top: 0;

    h2 {
      padding: 0;
    }

    button {
      margin-top: 0;
    }
  }

  & > div {
    box-sizing: border-box;
    height: 380px;
    overflow-y: hidden;
  }
`;

export default StyledPopup;
