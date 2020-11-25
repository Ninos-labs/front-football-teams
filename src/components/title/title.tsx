import React from 'react';
import PropTypes from 'prop-types';

import TitleTypes from './title.types';
import TitleStyled from './title.styled';

const Title = ({ team }: TitleTypes) => (
  <TitleStyled>
    {team} <span>Selección de Fútbol</span>
  </TitleStyled>
);

Title.propTypes = {
  team: PropTypes.string.isRequired
};

export default Title;