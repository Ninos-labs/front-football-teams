import React from 'react';
import { render } from '@testing-library/react';

import Info from './info';
import { InfoTypes } from './info.types';

describe('Components | Info', () => {
  let data: InfoTypes;
  beforeEach(() => {
    data = {
      versus: 'Paraguay',
      dates: '2020-11-17',
      hours: '00:00',
      events: 'Clas. Mundial (CONMEBOL) 2020',
      phases: 'j2',
      timezone: 'Europe/Madrid'
    };
  });

  it('should render the rival team', () => {
    const { getByText } = render(<Info {...data} />);
    const rivalNode = getByText(/Paraguay/);
    expect(rivalNode).toBeInTheDocument();
  });

  it('should render the match datetime formatted', () => {
    const { getByText } = render(<Info {...data} />);
    const datetime = getByText(/17 Nov, 2020. 00:00/);
    expect(datetime).toBeInTheDocument();
  });

  it('should render only date formatted when hours be null', () => {
    delete data.hours;
    const { getByText } = render(<Info {...data} />);
    const datetime = getByText(/17 Nov, 2020./);
    expect(datetime).toBeInTheDocument();
  });

  it('should render the event name', () => {
    const { getByText } = render(<Info {...data} />);
    const eventName = getByText('Clas. Mundial (CONMEBOL) 2020');
    expect(eventName).toBeInTheDocument();
  });

  it('should render the event phase', () => {
    const { getByText } = render(<Info {...data} />);
    const phase = getByText(/j2/);
    expect(phase).toBeInTheDocument();
  });
});
