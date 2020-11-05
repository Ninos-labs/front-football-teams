import React from 'react';
import { render } from '@testing-library/react';

import MatchCounter from './matchCounter';

describe('Components | MatchCounter', () => {
  it('should render the title and amount', () => {
    const { getByText } = render(
      <MatchCounter title="Victorias" amount="23,45%" />
    );
    const titleNode = getByText(/Victorias/);
    const amountNode = getByText('23,45%');
    expect(titleNode).toBeInTheDocument();
    expect(amountNode).toBeInTheDocument();
  });

  it('should render a `En total` text when isTotal be true', () => {
    const { getByText } = render(
      <MatchCounter title="Partidos" amount="405" isTotal />
    );
    const textNode = getByText(/en total/);
    expect(textNode).toBeInTheDocument();
  });

  it('should render a progress bar when isTotal be falsy', () => {
    const { getByText } = render(
      <MatchCounter title="Victorias" amount="23,45%" />
    );
    const progressNode = getByText(/progress: 23,45%/);
    expect(progressNode).toBeInTheDocument();
    expect(progressNode).toHaveAttribute('value', '23.45');
    expect(progressNode).toHaveAttribute('max', '100');
  });
});
