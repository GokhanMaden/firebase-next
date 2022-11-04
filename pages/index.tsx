import React from 'react';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log('featuredEvents: ', typeof featuredEvents);
  console.log('featuredEvents: ', featuredEvents);

  return (
    <div>
      <h1>The Home Page</h1>
      <EventList list={featuredEvents} />
    </div>
  );
}

export default HomePage;
