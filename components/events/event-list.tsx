import React from 'react';

import { IEvent } from '../../types/eventType';
import EventItem from './event-item';
import classes from './event-list.module.css';

type EventListType = {
  list: IEvent[];
};

const EventList = ({ list }: EventListType) => {
  return (
    <ul className={classes.list}>
      {list?.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
