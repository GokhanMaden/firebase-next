import fs from 'fs/promises';
import path from 'path';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

type ProductType = {
  id: string;
  title: string;
};

interface IHomePage {
  products: ProductType[];
}
function HomePage({ products }: IHomePage) {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList list={featuredEvents} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
