import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<any>([]);
  const filterData = router.query.slug;

  const { data, error } = useSWR(
    'https://nextjs-course-291fe-default-rtdb.firebaseio.com/events.json',
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setEvents(events);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content="A list of filtered events" />
    </Head>
  );

  if (!filterData) {
    return (
      <>
        {pageHeadData}
        <p className="center">Loading...</p>
      </>
    );
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${filteredYear}/${filteredMonth}`}
      />
    </Head>
  );

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12 ||
    error
  ) {
    return (
      <>
        {pageHeadData}
        <div>
          <ErrorAlert>
            <p>Invalid Filter. Please adjust your values!</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
        </div>
      </>
    );
  }

  let filteredEvents = events.filter((event: any) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === filteredYear &&
      eventDate.getMonth() === filteredMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <div>
          <ErrorAlert>
            <p>No event found for the chosen filter!</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
        </div>
      </>
    );
  }

  const selectedDate = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={selectedDate} />
      <EventList list={filteredEvents} />
    </>
  );
}

// export async function getServerSideProps(context: any) {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYear = +filterData[0];
//   const filteredMonth = +filterData[1];

//   if  {
//     return {
//       props: {
//         hasError: true,
//       },
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: filteredYear,
//     month: filteredMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       hasError: false,
//       date: {
//         year: filteredYear,
//         month: filteredMonth,
//       },
//     },
//   };
// }

export default FilteredEventsPage;
