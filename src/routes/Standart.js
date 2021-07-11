// MODULES
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// COMPONENTS
import Loading from '../components/Loading';
import StandartLayout from '../components/Layouts/Standart';
import LoadingModal from '../components/Modals/Loading';

// LAZY IMPORTS
const HomePage = lazy(() => import('../pages/Home.js'));
const SignInPage = lazy(() => import('../pages/Signin.js'));
const SignUpPage = lazy(() => import('../pages/Signup.js'));

function StandartRoutes() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <StandartLayout exact path="/" roles={[]} component={HomePage} />
            <StandartLayout path="/sign-in" roles={[]} component={SignInPage} />
            <StandartLayout path="/sign-up" roles={[]} component={SignUpPage} />
          </Switch>
          <LoadingModal />
        </Router>
      </Suspense>
    </>
  );
}

export default StandartRoutes;
