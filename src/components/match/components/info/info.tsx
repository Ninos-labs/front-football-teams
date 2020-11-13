import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import InfoStyled from './info.styled';
import { InfoTypes } from './info.types';

const Info: FC<InfoTypes> = ({
  versus,
  dates,
  hours,
  events,
  phases,
  timezone
}) => {
  const { locale, timeZone: tz } = Intl.DateTimeFormat().resolvedOptions();
  const datetime = DateTime.fromISO(
    `${dates ? dates : ''}${hours ? `T${hours}` : ''}`,
    { zone: timezone }
  );
  const datetimeWithYourTZAndLocale = datetime
    .setZone(tz)
    .setLocale(locale)
    .toFormat(`dd LLL, yyyy. ${hours ? 'HH:mm' : ''}`);
  return (
    <InfoStyled>
      <h4>
        {versus} <small>{datetimeWithYourTZAndLocale}</small>
      </h4>
      <p>
        <small>{events}</small> <small>{phases}</small>
      </p>
    </InfoStyled>
  );
};

Info.propTypes = {
  versus: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  hours: PropTypes.string,
  events: PropTypes.string.isRequired,
  phases: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired
};

export default Info;
