import React from 'react';

import MainHeader from './main-header';

type ILayout = {
  children: React.ReactNode;
};

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
