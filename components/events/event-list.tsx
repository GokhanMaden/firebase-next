import React from 'react';

import { IEvent } from '../../types/eventType';
import EventItem from './event-item';

type EventListType = {
  list: IEvent[];
};

const EventList = ({ list }: EventListType) => {
  return (
    <ul>
      {list?.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
};

export default EventList;
