import React, { FC } from 'react';
import PropTypes from 'prop-types';

import MatchCounterStyled from './matchCounter.styled';
import { MatchCounterTypes } from './matchCounter.types';

const MatchCounter: FC<MatchCounterTypes> = ({ title, amount, isTotal }) => (
  <MatchCounterStyled isTotal={!!isTotal}>
    <h4>{title}</h4>
    <h5>{amount}</h5>
    {isTotal ? (
      <small>[en total]</small>
    ) : (
      <progress value={amount.replace('%', '').replace(',', '.')} max="100">
        progress: {amount}
      </progress>
    )}
  </MatchCounterStyled>
);

MatchCounter.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isTotal: PropTypes.bool
};

export default MatchCounter;
