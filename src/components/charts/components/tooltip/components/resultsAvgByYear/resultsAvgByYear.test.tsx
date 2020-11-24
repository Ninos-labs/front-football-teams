import React from 'react';
import { render } from '@testing-library/react';

import ResultsAvgByYear from './resultsAvgByYear';

describe('Components | ResultsAvgByYear', () => {
  let data;
  beforeEach(() => {
    data = {
      winColor: '#6DD799',
      drawColor: '#0A1130',
      lossColor: '#D76D6D',
      payload: {
        years: 2020,
        matches: 4,
        wins: 1,
        draws: 0,
        losses: 3,
        winsAvg: 25,
        drawsAvg: 0,
        lossesAvg: 75
      }
    };
  });

  it('should render a title', () => {
    const { getByText } = render(<ResultsAvgByYear {...data} />);
    const titleNode = getByText(/En 2020 jugó 4 partidos/);
    expect(titleNode).toBeInTheDocument();
  });

  it('should render a wins paragraph', () => {
    const { getByText } = render(<ResultsAvgByYear {...data} />);
    const titleNode = getByText(/Victorias: 1/);
    const avgNode = getByText(/25.00%/);
    expect(titleNode).toBeInTheDocument();
    expect(avgNode).toBeInTheDocument();
  });

  it('should render a draws paragraph', () => {
    const { getByText } = render(<ResultsAvgByYear {...data} />);
    const titleNode = getByText(/Empates: 0/);
    const avgNode = getByText(/0.00%/);
    expect(titleNode).toBeInTheDocument();
    expect(avgNode).toBeInTheDocument();
  });

  it('should render a draws paragraph', () => {
    const { getByText } = render(<ResultsAvgByYear {...data} />);
    const titleNode = getByText(/Derrotas: 3/);
    const avgNode = getByText(/75.00%/);
    expect(titleNode).toBeInTheDocument();
    expect(avgNode).toBeInTheDocument();
  });
});
