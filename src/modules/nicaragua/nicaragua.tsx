import React from 'react';

import * as data from 'data/nicaragua';
import * as utils from 'utils';
import WrapperModule from 'modules/wrapperModule';

const Nicaragua = () => {
  const played = data.matches.filter(utils.byPlayed);
  const notPlayed = data.matches.filter(utils.byNotPLayed);
  const results = data.resultsAvg[0];
  const historicalMatches = [...data.matchWithMostGoalsFor, ...data.matchWithMostGoalsAgainst];
  const MatchesDataFormattedAvgByAt = utils.formatMatchesAvgByAt(data.matchesAvgByAt);

  return (
    <WrapperModule
      title="Nicaragua"
      data={data}
      played={played}
      notPlayed={notPlayed}
      results={results}
      historicalMatches={historicalMatches}
      MatchesDataFormattedAvgByAt={MatchesDataFormattedAvgByAt}
    />
  );
};

export default Nicaragua;
