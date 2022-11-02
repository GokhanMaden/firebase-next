import React from 'react';
import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'gokhan', name: 'Gokhan' },
    { id: 'maden', name: 'Maden' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
            {/* Alternative approach */}
            {/* <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
