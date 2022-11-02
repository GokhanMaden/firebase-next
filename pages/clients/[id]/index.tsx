import React from 'react';
import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push('/clients/max/projecta');
    // router.push({
    //   pathname: 'clients/[id]/[clientprojectid]',
    //   query: { id: 'gokhan', clientProject: 'projecta' },
    // });
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
