import React from 'react';
import { render } from '@testing-library/react';

import ByTeam from './byTeam';

describe('Components | ByTeam', () => {
  it('should render the component', () => {
    const { getByText } = render(<ByTeam versus="Venezuela" name="wins" type={2} />);
    const versusNode = getByText(/Vs. Venezuela/);
    const descriptionNode = getByText(/Victorias: 2/);
    expect(versusNode).toBeInTheDocument();
    expect(descriptionNode).toBeInTheDocument();
  });

  it('should render draw type', () => {
    const { getByText } = render(<ByTeam versus="Venezuela" name="draws" type={2} />);
    const descriptionNode = getByText(/Empates: 2/);
    expect(descriptionNode).toBeInTheDocument();
  });

  it('should render loss type', () => {
    const { getByText } = render(<ByTeam versus="Venezuela" name="losses" type={2} />);
    const descriptionNode = getByText(/Derrotas: 2/);
    expect(descriptionNode).toBeInTheDocument();
  });
});
