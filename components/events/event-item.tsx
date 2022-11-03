import React from 'react';

import { IEvent } from '../../types/eventType';

type EventItemType = {
  event: IEvent;
};

const EventItem = ({ event }: EventItemType) => {
  return <li key={event.id}>{event.title}</li>;
};

export default EventItem;
