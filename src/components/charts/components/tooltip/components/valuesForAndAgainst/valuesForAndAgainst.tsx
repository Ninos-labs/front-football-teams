import React from 'react';
import PropTypes from 'prop-types';

import { ValuesForAndAgainstTypes } from './valuesForAndAgainst.types';
import TooltipStyled from 'components/charts/components/tooltip/tooltip.styled';

const ValuesForAndAgainst = ({ versus, valueFor, valueAgainst }: ValuesForAndAgainstTypes) => (
  <TooltipStyled>
    <h4>Vs. {versus}</h4>
    <p>A Favor: {valueFor}</p>
    <p>En Contra: {valueAgainst}</p>
  </TooltipStyled>
);

ValuesForAndAgainst.propTypes = {
  versus: PropTypes.string.isRequired,
  valueFor: PropTypes.number.isRequired,
  valueAgainst: PropTypes.number.isRequired
};

export default ValuesForAndAgainst;
