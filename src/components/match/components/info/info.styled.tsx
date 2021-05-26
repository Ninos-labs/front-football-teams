import styled from 'styled-components';

const InfoStyled = styled.div`
  p {
    margin: 0;
  }

  h4 {
    font-size: 1.4rem;
    margin: 0 0 0.4rem;
    text-transform: uppercase;

    @media screen and (min-width: ${({ theme }) => theme.size?.medium}) {
      font-size: 1.2rem;
    }

    small {
      font-weight: 400;
      @media screen and (max-width: ${({ theme }) => theme.size?.medium}) {
        display: block;
      }
    }
  }

  small  {
    color: ${({ theme }) => theme.colors?.dustyGray};
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export default InfoStyled;
