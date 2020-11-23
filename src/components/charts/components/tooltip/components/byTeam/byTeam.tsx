import React from 'react';
import Proptypes from 'prop-types';

import { ByTeamTypes } from './byTeam.types';
import TooltipStyled from 'components/charts/components/tooltip/tooltip.styled';

const ByTeam = ({ versus, name, type }: ByTeamTypes) => {
  let title;
  switch (name) {
    case 'wins':
      title = 'Victorias';
      break;
    case 'draws':
      title = 'Empates';
      break;
    default:
      title = 'Derrotas';
      break;
  }
  return (
    <TooltipStyled>
      <h4>Vs. {versus}</h4>
      <p>
        {title}: {type}
      </p>
    </TooltipStyled>
  );
};

ByTeam.prototypes = {
  versus: Proptypes.string,
  name: Proptypes.oneOf(['wins', 'draws', 'losses']),
  type: Proptypes.number.isRequired
};

export default ByTeam;
