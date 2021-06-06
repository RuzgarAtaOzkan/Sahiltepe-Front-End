// MODULES
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import LoadingPage from '../components/Loading';

// LAZY IMPORTS
const HomePage = lazy(() => import('../pages/Home.js'));
const SignInPage = lazy(() => import('../pages/Signin.js'));
const SignUpPage = lazy(() => import('../pages/Signup.js'));

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
