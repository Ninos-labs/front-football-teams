import styled from 'styled-components';

const InfoStyled = styled.div`
  p {
    margin: 0;
  }

  h4 {
    font-size: 1.4rem;
    margin: 0 0 0.4rem;
    text-transform: uppercase;
  }

  small  {
    color: ${({ theme }) => theme.colors?.dustyGray};
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export default InfoStyled;
