import React from 'react';

import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage({ events, hasError, date }: any) {
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = +filterData[0];
  // const filteredMonth = +filterData[1];

  if (hasError) {
    return <p>Invalid Filter. Please adjust your values!</p>;
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        <ErrorAlert>
          <p>No event found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </div>
    );
  }

  const selectedDate = new Date(date.year, date.month - 1);
  return (
    <>
      <ResultsTitle date={selectedDate} />
      <EventList list={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      events: filteredEvents,
      hasError: false,
      date: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
}

export default FilteredEventsPage;
