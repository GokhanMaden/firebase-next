import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

type EventType = {
  id: string;
  title?: string;
};

interface IHomePage {
  events: EventType[];
}
function HomePage({ events }: IHomePage) {
  return (
    <div>
      <EventList list={events} />
    </div>
  );
}

export async function getStaticProps(context: any) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
