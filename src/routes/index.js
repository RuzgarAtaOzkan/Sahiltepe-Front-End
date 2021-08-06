import React from 'react';

// COMPONENTS
import LoadingModal from '../components/Modals/Loading';

// LAYOUTS
import StandartRoutes from './Standart';

function Routes() {
  return (
    <>
      <StandartRoutes />
      <LoadingModal />
    </>
  );
}

export default Routes;
