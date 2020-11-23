import React from 'react';

import MatchStyled from './match.styled';
import { MatchTypes } from './match.types';
import * as Components from './components';

const Match = (props: MatchTypes) => (
  <MatchStyled>
    {props.results !== 'Not played' && (
      <Components.FinalResults
        results={props.results}
        at={props.at}
        gf={props.gf}
        ga={props.ga}
      />
    )}
    <Components.Info
      versus={props.versus}
      dates={props.dates}
      hours={props.hours}
      events={props.events}
      phases={props.phases}
      timezone={props.timezone}
    />
  </MatchStyled>
);

Match.propTypes = {
  ...Components.Info.propTypes,
  ...Components.FinalResults.propTypes
};

export default Match;
