import React from 'react';
import { render } from '@testing-library/react';

import FinalResults from './finalResults';
import { FinalResultsTypes } from './finalResults.types';

describe('Components | FinalResults', () => {
  let data: FinalResultsTypes;
  beforeEach(() => {
    data = {
      at: 'Home',
      results: 'Loss',
      gf: 0,
      ga: 1
    };
  });

  it('should has a data-result attribute', () => {
    const { getByTestId } = render(<FinalResults {...data} />);
    const wrapNode = getByTestId('final-result');
    expect(wrapNode).toHaveAttribute('data-result', data.results);
  });

  it('should render a li with amount of goals for', () => {
    const { getByText } = render(<FinalResults {...data} />);
    const goalsNode = getByText(/0/);
    expect(goalsNode).toBeInTheDocument();
  });

  it('should render a li with amount of goals against', () => {
    const { getByText } = render(<FinalResults {...data} />);
    const goalsNode = getByText(/1/);
    expect(goalsNode).toBeInTheDocument();
  });

  it('should render the Goals For attr in the first li tag when the At attr be Home', () => {
    const { container } = render(<FinalResults {...data} />);
    const liNode = container.querySelectorAll('li');
    expect(liNode[0]).toHaveTextContent('0');
    expect(liNode[1]).toHaveTextContent('1');
  });

  it('should render the Goals Against attr in the first li tag when the At attr be Abroad', () => {
    data = { ...data, at: 'Abroad' };
    const { container } = render(<FinalResults {...data} />);
    const liNode = container.querySelectorAll('li');
    expect(liNode[0]).toHaveTextContent('1');
    expect(liNode[1]).toHaveTextContent('0');
  });

  it('should render the Goals Against attr in the first li tag when the At attr be Neutral', () => {
    data = { ...data, at: 'Neutral' };
    const { container } = render(<FinalResults {...data} />);
    const liNode = container.querySelectorAll('li');
    expect(liNode[0]).toHaveTextContent('1');
    expect(liNode[1]).toHaveTextContent('0');
  });
});
