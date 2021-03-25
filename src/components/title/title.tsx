import React from 'react';
import PropTypes from 'prop-types';

import * as Components from './components';
import TitleTypes from './title.types';
import TitleStyled from './title.styled';
import { ReactComponent as Arrow } from 'svgs/arrow.svg';

const Title = ({ team, isOpenCountriesList, setIsOpenCountriesList }: TitleTypes) => (
  <TitleStyled isOpenCountriesList={!!isOpenCountriesList}>
    <button onClick={setIsOpenCountriesList}>
      {team} <Arrow />
    </button>
    <Components.CountriesList isOpenCountriesList={!!isOpenCountriesList} />
  </TitleStyled>
);

Title.propTypes = {
  team: PropTypes.string.isRequired,
  isOpenCountriesList: PropTypes.bool.isRequired,
  setIsOpenCountriesList: PropTypes.func.isRequired
};

export default Title;
