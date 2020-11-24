import React from 'react';
import PropTypes from 'prop-types';

import { resultsAvgByYearTypes } from './resultsAvgByYear.types';
import TooltipStyled from 'components/charts/components/tooltip/tooltip.styled';

const ResultsAvgByYear = ({ winColor, drawColor, lossColor, payload }: resultsAvgByYearTypes) => (
  <TooltipStyled>
    <h4>
      En {payload.years} jugó {payload.matches} partidos
    </h4>
    <p style={{ color: winColor }}>
      Victorias: {payload.wins}
      <small> {payload.winsAvg.toFixed(2)}%</small>
    </p>
    <p style={{ color: drawColor }}>
      Empates: {payload.draws}
      <small> {payload.drawsAvg.toFixed(2)}%</small>
    </p>
    <p style={{ color: lossColor }}>
      Derrotas: {payload.losses}
      <small> {payload.lossesAvg.toFixed(2)}%</small>
    </p>
  </TooltipStyled>
);

ResultsAvgByYear.propTypes = {
  winColor: PropTypes.string.isRequired,
  drawColor: PropTypes.string.isRequired,
  lossColor: PropTypes.string.isRequired,
  payload: PropTypes.shape({
    years: PropTypes.number.isRequired,
    matches: PropTypes.number.isRequired,
    wins: PropTypes.number.isRequired,
    winsAvg: PropTypes.number.isRequired,
    draws: PropTypes.number.isRequired,
    drawsAvg: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired,
    lossesAvg: PropTypes.number.isRequired
  })
};

export default ResultsAvgByYear;
