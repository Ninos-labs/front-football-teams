import React from 'react';
import { render } from '@testing-library/react';

import AreaChart from './areaChart';

describe('Components | AreaChart', () => {
  let data;
  beforeEach(() => {
    data = [
      {
        years: 2020,
        matches: 2,
        wins: 0,
        draws: 0,
        losses: 2,
        winsAvg: 0,
        drawsAvg: 0,
        lossesAvg: 100
      },
      {
        years: 2019,
        matches: 2,
        wins: 0,
        draws: 0,
        losses: 2,
        winsAvg: 0,
        drawsAvg: 0,
        lossesAvg: 100
      }
    ];
  });

  it('should render every year as a chart axis', () => {
    const { getByText } = render(
      <AreaChart
        data={data}
        items={[
          { name: 'wins', fill: '#6DD799' },
          { name: 'draws', fill: '#0A1130' },
          { name: 'losses', fill: '#D76D6D' }
        ]}
      />
    );
    const nodeOptions = { selector: 'tspan' };
    const yearOneNode = getByText(/2020/i, nodeOptions);
    const yearTwoNode = getByText(/2019/i, nodeOptions);
    expect(yearOneNode).toBeInTheDocument();
    expect(yearTwoNode).toBeInTheDocument();
  });
});
