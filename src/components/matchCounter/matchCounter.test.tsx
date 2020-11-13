import React from 'react';
import { render } from '@testing-library/react';

import MatchCounter from './matchCounter';

describe('Components | MatchCounter', () => {
  let amount: number;
  beforeEach(() => {
    amount = 0.234512;
  });

  it('should render the title and amount', () => {
    const { getByText } = render(
      <MatchCounter title="Victorias" amount={amount} />
    );
    const titleNode = getByText(/Victorias/);
    const amountNode = getByText('23.45%');
    expect(titleNode).toBeInTheDocument();
    expect(amountNode).toBeInTheDocument();
  });

  it('should render a `En total` text when isTotal be true', () => {
    amount = 405;
    const { getByText } = render(
      <MatchCounter title="Partidos" amount={amount} isTotal />
    );
    const textNode = getByText(/en total/);
    const amountNode = getByText(/405/);
    expect(textNode).toBeInTheDocument();
    expect(amountNode).toBeInTheDocument();
  });

  it('should render a progress bar when isTotal be falsy', () => {
    const { getByText } = render(
      <MatchCounter title="Victorias" amount={amount} />
    );
    const progressNode = getByText(/progress: 23.45/);
    expect(progressNode).toBeInTheDocument();
    expect(progressNode).toHaveAttribute('value', '23.45');
    expect(progressNode).toHaveAttribute('max', '100');
  });
});
