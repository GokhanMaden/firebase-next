import React from 'react';

import { getFeaturedEvents, getEventById } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage({ selectedEvent }: any) {
  const event = selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <h1>Loading..</h1>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context: any) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events?.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export default EventDetailPage;
