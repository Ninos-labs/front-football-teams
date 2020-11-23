import React from 'react';
import { render } from '@testing-library/react';

import ValuesForAndAgainst from './valuesForAndAgainst';

describe('Components | ValuesForAndAgainst', () => {
  let data;
  beforeEach(() => {
    data = {
      versus: 'Venezuela',
      valueFor: 8,
      valueAgainst: 4
    };
  });

  it('should render a title', () => {
    const { getByText } = render(<ValuesForAndAgainst {...data} />);
    const versusNode = getByText(/Vs. Venezuela/);
    expect(versusNode).toBeInTheDocument();
  });

  it('should render values for amount', () => {
    const { getByText } = render(<ValuesForAndAgainst {...data} />);
    const valuesForNode = getByText(/A Favor: 8/);
    expect(valuesForNode).toBeInTheDocument();
  });

  it('should render values against amount', () => {
    const { getByText } = render(<ValuesForAndAgainst {...data} />);
    const valueAgainstNode = getByText(/En Contra: 4/);
    expect(valueAgainstNode).toBeInTheDocument();
  });
});
