import React from 'react';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList list={featuredEvents} />
    </div>
  );
}

export default HomePage;
