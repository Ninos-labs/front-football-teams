import React from 'react';

import * as data from 'data/mexico';
import * as utils from 'utils';
import WrapperModule from 'modules/wrapperModule';

const Mexico = () => {
  const played = data.matches.filter(utils.byPlayed);
  const notPlayed = data.matches.filter(utils.byNotPLayed);
  const results = data.resultsAvg[0];
  const historicalMatches = [...data.matchWithMostGoalsFor, ...data.matchWithMostGoalsAgainst];
  const MatchesDataFormattedAvgByAt = utils.formatMatchesAvgByAt(data.matchesAvgByAt);

  return (
    <WrapperModule
      title="Mexico"
      data={data}
      played={played}
      notPlayed={notPlayed}
      results={results}
      historicalMatches={historicalMatches}
      MatchesDataFormattedAvgByAt={MatchesDataFormattedAvgByAt}
    />
  );
};

export default Mexico;
