import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors?.pastelGreen};
  border: 1px solid ${({ theme }) => theme.colors?.black};
  border-radius: ${({ theme }) => theme.radius?.small};
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.7rem 1rem;
  transform: translateX(0);
  transition: transform 0.3s;

  &:hover {
    transform: translateX(0.5rem);
  }

  &:active {
    color: ${({ theme }) => theme.colors?.blueZodiac};
    transform: scale(1.1);
  }
`;

export default StyledButton;
