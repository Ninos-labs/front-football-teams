import React from 'react';
import { render } from '@testing-library/react';

import Match from './match';
import { MatchTypes } from './match.types';

describe('Components | Match', () => {
  let data: MatchTypes;
  beforeEach(() => {
    data = {
      at: 'Home',
      results: 'Loss',
      versus: 'Paraguay',
      dates: '2020-11-17',
      hours: '00:00',
      events: 'Clas. Mundial (CONMEBOL) 2020',
      phases: 'j2',
      gf: 0,
      ga: 1,
      timezone: 'Europe/Madrid'
    };
  });

  it('should render the final result when the match was played', () => {
    const { getByTestId } = render(<Match {...data} />);
    const finalResultNode = getByTestId('final-result');
    expect(finalResultNode).toBeInTheDocument();
  });

  it('should not render the final result when the match was not played', () => {
    data = { ...data, results: 'Not played' };
    const { queryByTestId } = render(<Match {...data} />);
    const finalResultNode = queryByTestId('final-result');
    expect(finalResultNode).not.toBeInTheDocument();
  });
});
