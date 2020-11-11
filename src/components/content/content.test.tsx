import React from 'react';
import { render } from '@testing-library/react';

import ContentStyled from './content.styled';

describe('Components | ContentStyled', () => {
  it('should render a content with his children value', () => {
    const { getByText } = render(<ContentStyled>content...</ContentStyled>);
    const contentNode = getByText(/content.../);
    expect(contentNode).toBeInTheDocument();
  });
});
