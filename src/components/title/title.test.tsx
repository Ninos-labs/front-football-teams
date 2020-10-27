import React from 'react';
import { render } from '@testing-library/react';

import Title from './title';

describe('Components | Title', () => {
  it('should render a title with his team', () => {
    const { getByText } = render(<Title team="Venezuela" />);
    const teamNode = getByText(/Venezuela/);
    expect(teamNode).toBeInTheDocument();
  });

  it('should render the span tag', () => {
    const { getByText } = render(<Title team="Venezuela" />);
    const subTitleNode = getByText(/Selección de Fútbol/);
    expect(subTitleNode).toBeInTheDocument();
  });
});
