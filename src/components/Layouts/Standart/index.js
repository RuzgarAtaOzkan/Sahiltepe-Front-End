// MODULES
import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../../Header';
import Footer from '../../Footer';

export default function StandartLayout({ component, exact, path = '/' }) {
  return (
    <>
      <main>
        <Header />
        <Route exact={exact} path={path} component={component} />
        <Footer />
      </main>
    </>
  );
}
