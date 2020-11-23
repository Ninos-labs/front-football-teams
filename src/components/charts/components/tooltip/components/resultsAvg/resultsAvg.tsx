import React from 'react';
import PropTypes from 'prop-types';

import { resultsAvg } from './resultsAvg.types';
import TooltipStyled from 'components/charts/components/tooltip/tooltip.styled';

const ResultsAvg = ({ name, win, draw, loss }: resultsAvg) => (
  <TooltipStyled>
    <h4>
      {name}:<small>{win + draw + loss}% de partidos</small>
    </h4>
    <p style={{ color: '#D76D6D' }}>Derrota: {loss}%</p>
    <p style={{ color: '#0A1130' }}>Empate: {draw}%</p>
    <p style={{ color: '#6DD799' }}>Victoria: {win}%</p>
  </TooltipStyled>
);

ResultsAvg.propTypes = {
  name: PropTypes.string.isRequired,
  win: PropTypes.number.isRequired,
  draw: PropTypes.number.isRequired,
  loss: PropTypes.number.isRequired
};

export default ResultsAvg;
