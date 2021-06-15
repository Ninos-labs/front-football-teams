import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CountriesList, { countries } from './countriesList';

describe('Components | CountriesList', () => {
  it('should render an input tag', () => {
    const { container } = render(
      <Router>
        <CountriesList isOpenCountriesList={true} />
      </Router>
    );
    const inputNode = container.querySelector('input');
    expect(inputNode).toHaveAttribute('type', 'search');
    expect(inputNode).toHaveAttribute('placeholder', 'Filtra por nombre...');
  });

  it('should fire onchange method on input and update countries list', () => {
    const { container } = render(
      <Router>
        <CountriesList isOpenCountriesList={true} />
      </Router>
    );
    const inputNode = container.querySelector('input');
    fireEvent.change(inputNode, { target: { value: 'ar' } });

    const listNode = container.querySelector('div');
    let linksNode = listNode.querySelectorAll('a');

    expect(linksNode).toHaveLength(3);

    fireEvent.change(inputNode, { target: { value: 'argentina' } });

    linksNode = listNode.querySelectorAll('a');

    expect(linksNode).toHaveLength(1);
    expect(linksNode[0]).toHaveAttribute('href', '/arg');
    expect(linksNode[0]).toHaveTextContent('Argentina');
  });

  it('should render a small tag with the countries total amount', () => {
    const { container } = render(
      <Router>
        <CountriesList isOpenCountriesList={true} />
      </Router>
    );
    const smallNode = container.querySelector('small');
    expect(smallNode).toHaveTextContent(`${countries.length} resultados encontrados`);
  });

  it('should render a countries list', () => {
    const { container } = render(
      <Router>
        <CountriesList isOpenCountriesList={true} />
      </Router>
    );

    const listNode = container.querySelector('div');
    const linksNode = listNode.querySelectorAll('a');
    expect(linksNode).toHaveLength(18);
    linksNode.forEach((link, index) => {
      const code = `/${countries[index].code}`;
      const name = countries[index].name;
      expect(link).toHaveAttribute('href', code);
      expect(link).toHaveTextContent(name);
    });
  });
});
