import React from 'react';
import { render } from '@testing-library/react';

import BoxTitleStyled from './boxTitle.styled';

describe('Components | BoxTitleStyled', () => {
  it('should render a box title with his children value', () => {
    const { getByText } = render(
      <BoxTitleStyled>Próximos partidos</BoxTitleStyled>
    );
    const boxTitleNode = getByText(/Próximos partidos/);
    expect(boxTitleNode).toBeInTheDocument();
  });
});
