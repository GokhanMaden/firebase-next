import Link from 'next/link';
import React from 'react';

import { IEvent } from '../../types/eventType';

type EventItemType = {
  event: IEvent;
};

const EventItem = ({ event }: EventItemType) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = event.location.replace(', ', '\n');
  const exploreEvent = `/events/${event.id}`;

  return (
    <li>
      <img src="" alt={event.title} />
      <div>
        <h2>{event.title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={exploreEvent}>Explore Events</Link>
      </div>
    </li>
  );
};

export default EventItem;
