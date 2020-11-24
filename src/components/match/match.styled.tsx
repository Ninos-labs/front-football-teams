import styled from 'styled-components';

const MatchStyled = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.gallery};
  display: flex;
  padding: 1rem 1.5rem;

  &:last-of-type {
    border-bottom: 0;
  }
`;

export default MatchStyled;
