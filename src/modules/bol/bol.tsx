import React from 'react';

import * as data from 'data/bol';
import * as utils from 'utils';
import WrapperModule from 'modules/wrapperModule';

const Bol = () => {
  const played = data.matches.filter(utils.byPlayed);
  const notPlayed = data.matches.filter(utils.byNotPLayed);
  const results = data.resultsAvg[0];
  const historicalMatches = [...data.matchWithMostGoalsFor, ...data.matchWithMostGoalsAgainst];
  const MatchesDataFormattedAvgByAt = utils.formatMatchesAvgByAt(data.matchesAvgByAt);

  return (
    <WrapperModule
      title="Bolivia"
      data={data}
      played={played}
      notPlayed={notPlayed}
      results={results}
      historicalMatches={historicalMatches}
      MatchesDataFormattedAvgByAt={MatchesDataFormattedAvgByAt}
    />
  );
};

export default Bol;
