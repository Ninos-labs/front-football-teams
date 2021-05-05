import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CountriesListTypes from './countriesList.types';
import CountriesListStyled from './countriesList.styled';

export const countries = [
  { name: 'Argentina', code: 'arg' },
  { name: 'Bolivia', code: 'bol' },
  { name: 'Brasil', code: 'bra' },
  { name: 'Colombia', code: 'col' },
  { name: 'Costa Rica', code: 'costarica' },
  { name: 'Chile', code: 'chi' },
  { name: 'Ecuador', code: 'ecu' },
  { name: 'El Salvador', code: 'elsalvador' },
  { name: 'Guatemala', code: 'guatemala' },
  { name: 'Honduras', code: 'honduras' },
  { name: 'Nicaragua', code: 'nicaragua' },
  { name: 'Panamá', code: 'panama' },
  { name: 'Paraguay', code: 'par' },
  { name: 'Peru', code: 'peru' },
  { name: 'Uruguay', code: 'uruguay' },
  { name: 'Venezuela', code: 'ven' }
];

const CountriesList = ({ isOpenCountriesList }: CountriesListTypes) => {
  const [query, setQuery] = useState('');
  const [countriesFiltered, setCountriesFiltered] = useState(countries);

  useEffect(() => {
    if (query.length === 0) {
      setCountriesFiltered(countries);
    } else {
      const newCountries = countriesFiltered.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      );
      setCountriesFiltered(newCountries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (!isOpenCountriesList) return null;
  return (
    <CountriesListStyled data-testid="countries-list">
      <input type="search" placeholder="buscar..." onChange={(e) => setQuery(e.target.value)} />
      <small>{countriesFiltered.length} resultados encontrados</small>
      <div>
        {countriesFiltered.map((country, index) => (
          <Link key={index} to={country.code}>
            {country.name}
          </Link>
        ))}
      </div>
    </CountriesListStyled>
  );
};

CountriesList.propTypes = {
  isOpenCountriesList: PropTypes.bool.isRequired
};

export default CountriesList;
