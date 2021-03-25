import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Title from './title';

describe('Components | Title', () => {
  it('should render a team name with an arrow icon', () => {
    const { container, getByText } = render(
      <Title team="Venezuela" isOpenCountriesList={false} setIsOpenCountriesList={jest.fn()} />
    );
    const teamNode = getByText(/Venezuela/);
    const arrowSvgNode = container.querySelector('svg');
    expect(teamNode).toBeInTheDocument();
    expect(arrowSvgNode).toHaveTextContent('arrow.svg');
  });

  it('should render a countries list component', () => {
    const { getByTestId } = render(
      <Router>
        <Title team="Venezuela" isOpenCountriesList={true} setIsOpenCountriesList={jest.fn()} />
      </Router>
    );
    const countriesListNode = getByTestId('countries-list');
    expect(countriesListNode).toBeInTheDocument();
  });
});
