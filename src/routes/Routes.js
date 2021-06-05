import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import LoadingPage from '../pages/Loading';
const HomePage = lazy(() => import('../pages/Home'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));

function Routes() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
          </Switch>
        </main>
      </Suspense>
    </>
  );
}

export default Routes;
