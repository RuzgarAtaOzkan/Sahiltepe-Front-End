import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import LoadingPage from '../pages/Loading';

// PAGES
const HomePage = lazy(() => import('../pages/Home'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));

function Routes() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default Routes;
