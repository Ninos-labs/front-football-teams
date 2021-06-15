import React from 'react';
import PropTypes from 'prop-types';

import MatchCounterStyled from './matchCounter.styled';
import { MatchCounterTypes } from './matchCounter.types';

const MatchCounter = ({ title, amount, isTotal }: MatchCounterTypes) => {
  const amountFormatted = (amount * 100).toFixed(2);
  return (
    <MatchCounterStyled isTotal={!!isTotal}>
      <h4>{title}</h4>
      <h5>{isTotal ? amount : `${amountFormatted}%`}</h5>
      {isTotal ? (
        <small>(en total)</small>
      ) : (
        <progress value={amountFormatted} max="100">
          progress: {amountFormatted}
        </progress>
      )}
    </MatchCounterStyled>
  );
};

MatchCounter.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isTotal: PropTypes.bool
};

export default MatchCounter;
