import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import CurrencyDetails from '../pages/CurrencyDetails';
// import ForgotPassword from '../pages/ForgotPassword';
// import ResetPassword from '../pages/ResetPassword';

// import Profile from '../pages/Profile';
// import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route
        path="/currencydetails/:currency"
        component={CurrencyDetails}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
