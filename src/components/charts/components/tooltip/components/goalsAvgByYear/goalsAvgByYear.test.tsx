import React from 'react';
import { render } from '@testing-library/react';

import GoalsAvgByYear from './goalsAvgByYear';

describe('Components | GoalsAvgByYear', () => {
  let data, gfColor, gaColor;
  beforeEach(() => {
    data = {
      years: 2020,
      matches: 12,
      gf: 6,
      gfAvg: 0.5,
      ga: 12,
      gaAvg: 1
    };
    gfColor = '#6DD799';
    gaColor = '#0A1130';
  });

  it('should render the title', () => {
    const { getByText } = render(
      <GoalsAvgByYear payload={data} gfColor={gfColor} gaColor={gaColor} />
    );
    const titleNode = getByText(/En 2020 jugó 12 partidos/);
    expect(titleNode).toBeInTheDocument();
  });

  it('should render the goals for paragraph', () => {
    const { getByText } = render(
      <GoalsAvgByYear payload={data} gfColor={gfColor} gaColor={gaColor} />
    );
    const gfTitleNode = getByText(/A Favor: 6/);
    const gfAvgNode = getByText(/0.50 por partido/);
    expect(gfTitleNode).toBeInTheDocument();
    expect(gfAvgNode).toBeInTheDocument();
  });

  it('should render the goals against paragraph', () => {
    const { getByText } = render(
      <GoalsAvgByYear payload={data} gfColor={gfColor} gaColor={gaColor} />
    );
    const gfTitleNode = getByText(/En Contra: 12/);
    const gfAvgNode = getByText(/1.00 por partido/);
    expect(gfTitleNode).toBeInTheDocument();
    expect(gfAvgNode).toBeInTheDocument();
  });
});
