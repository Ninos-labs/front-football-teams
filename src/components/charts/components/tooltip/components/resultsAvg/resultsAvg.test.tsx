import React from 'react';
import { render } from '@testing-library/react';

import ResultsAvg from './resultsAvg';

describe('Components | ResultsAvg', () => {
  let data;
  beforeEach(() => {
    data = {
      name: 'Local',
      win: 30,
      draw: 20,
      loss: 15
    };
  });

  it('should render a title', () => {
    const { getByText } = render(<ResultsAvg {...data} />);
    const titleNode = getByText(/Local:/);
    const totalNode = getByText(/65% de partidos/);
    expect(titleNode).toBeInTheDocument();
    expect(totalNode).toBeInTheDocument();
  });

  it('should render total wins', () => {
    const { getByText } = render(<ResultsAvg {...data} />);
    const valueNode = getByText(/Victoria: 30%/);
    expect(valueNode).toBeInTheDocument();
  });

  it('should render total draws', () => {
    const { getByText } = render(<ResultsAvg {...data} />);
    const valueNode = getByText(/Empate: 20%/);
    expect(valueNode).toBeInTheDocument();
  });

  it('should render total losses', () => {
    const { getByText } = render(<ResultsAvg {...data} />);
    const valueNode = getByText(/Derrota: 15%/);
    expect(valueNode).toBeInTheDocument();
  });
});
