import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Spinner from '../Loader';
import NotFoundPage from '../../pages/NotFoundPage';

const HomePage = lazy(() =>
  import('../../pages/HomePage/' /* webpackChunkName: "HomePage" */),
);

const PhonebookPage = lazy(() =>
  import('../../pages/PhonebookPage' /* webpackChunkName: "PhonebookPage" */),
);
const LoginPage = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);

const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);

const Content = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute path="/" exact component={HomePage} />

          <PublicRoute
            component={LoginPage}
            path="/login"
            redirectTo="/phonebook"
            restricted
          />
          <PublicRoute
            component={RegisterPage}
            path="/register"
            redirectTo="/phonebook"
            restricted
          />
          <PrivateRoute component={PhonebookPage} path="/phonebook" redirectTo="/login" />

          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
