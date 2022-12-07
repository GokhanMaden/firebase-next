import React from 'react';

import { IEvent } from '../../types/eventType';
import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = ({ list }: any) => {
  return (
    <ul className={classes.list}>
      {list?.map((event: any) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
