import React from 'react';
import { render } from '@testing-library/react';

import HeaderStyled from './header.styled';

describe('Components | HeaderStyled', () => {
  it('should render a content with his children value', () => {
    const { getByText } = render(<HeaderStyled>header...</HeaderStyled>);
    const headerNode = getByText(/header.../);
    expect(headerNode).toBeInTheDocument();
  });
});
