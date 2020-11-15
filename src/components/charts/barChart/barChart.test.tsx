import React from 'react';
import { render } from '@testing-library/react';

import BarChart from './barChart';

describe('Components | BarChart', () => {
  let data;
  beforeEach(() => {
    data = [
      { name: 'Home', Loss: 15.14, Win: 14.14, Draw: 10.92 },
      { name: 'Abroad', Loss: 26.55, Win: 5.96, Draw: 8.68 },
      { name: 'Neutral', Loss: 11.91, Win: 3.47, Draw: 3.23 }
    ];
  });

  it('should render item names as a legend', () => {
    const { getByText } = render(
      <BarChart
        data={data}
        xAxis="name"
        items={[
          { name: 'Win', fill: '#6DD799' },
          { name: 'Draw', fill: '#0A1130' },
          { name: 'Loss', fill: '#D76D6D' }
        ]}
      />
    );
    const nodeOptions = { selector: 'span' };
    const winLegendNode = getByText(/Win/i, nodeOptions);
    const lossLegendNode = getByText(/Loss/i, nodeOptions);
    const drawLegendNode = getByText(/Draw/i, nodeOptions);
    expect(winLegendNode).toBeInTheDocument();
    expect(lossLegendNode).toBeInTheDocument();
    expect(drawLegendNode).toBeInTheDocument();
  });

  it('should render how was played every game as a chart axis', () => {
    const { getByText } = render(
      <BarChart
        data={data}
        xAxis="name"
        items={[
          { name: 'Win', fill: '#6DD799' },
          { name: 'Draw', fill: '#0A1130' },
          { name: 'Loss', fill: '#D76D6D' }
        ]}
      />
    );
    const nodeOptions = { selector: 'tspan' };
    const homeAxisNode = getByText(/Home/i, nodeOptions);
    const abroadAxisNode = getByText(/Abroad/i, nodeOptions);
    const neutralAxisNode = getByText(/Neutral/i, nodeOptions);
    expect(homeAxisNode).toBeInTheDocument();
    expect(abroadAxisNode).toBeInTheDocument();
    expect(neutralAxisNode).toBeInTheDocument();
  });
});
