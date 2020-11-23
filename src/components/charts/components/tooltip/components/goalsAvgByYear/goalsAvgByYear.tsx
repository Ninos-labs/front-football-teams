import React from 'react';
import PropTypes from 'prop-types';

import { GoalsAvgByYearTypes } from './goalsAvgByYear.types';
import TooltipStyled from 'components/charts/components/tooltip/tooltip.styled';

const GoalsAvgByYear = ({ payload, gfColor, gaColor }: GoalsAvgByYearTypes) => (
  <TooltipStyled>
    <h4>
      En {payload?.years} jugó {payload?.matches} partidos
    </h4>
    <p style={{ color: gfColor }}>
      A Favor: {payload.gf}
      <small> {payload.gfAvg.toFixed(2)} por partido</small>
    </p>
    <p style={{ color: gaColor }}>
      En Contra: {payload.ga}
      <small> {payload.gaAvg.toFixed(2)} por partido</small>
    </p>
  </TooltipStyled>
);

GoalsAvgByYear.propTypes = {
  gfColor: PropTypes.string.isRequired,
  gaColor: PropTypes.string.isRequired,
  payload: PropTypes.shape({
    years: PropTypes.number.isRequired,
    matches: PropTypes.number.isRequired,
    gf: PropTypes.number.isRequired,
    gfAvg: PropTypes.number.isRequired,
    ga: PropTypes.number.isRequired,
    gaAvg: PropTypes.number.isRequired
  })
};

export default GoalsAvgByYear;
