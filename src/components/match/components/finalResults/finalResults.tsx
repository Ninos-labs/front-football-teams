import React from 'react';
import PropTypes from 'prop-types';

import FinalResultsStyled from './finalResults.styled';
import { AtTypes, ResultsTypes, FinalResultsTypes } from './finalResults.types';

const FinalResults = ({ results, at, gf, ga }: FinalResultsTypes) => (
  <FinalResultsStyled data-testid="final-result" data-result={results}>
    <ul>
      <li>{at === 'Home' ? gf : ga}</li>
      <li>{at === 'Home' ? ga : gf}</li>
    </ul>
  </FinalResultsStyled>
);

FinalResults.propTypes = {
  at: PropTypes.oneOf<AtTypes>(['Home', 'Abroad', 'Neutral']).isRequired,
  results: PropTypes.oneOf<ResultsTypes>(['Not played', 'Loss', 'Win', 'Draw'])
    .isRequired,
  gf: PropTypes.number.isRequired,
  ga: PropTypes.number.isRequired
};

export default FinalResults;
