import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import CurrencyDetails from '../pages/CurrencyDetails';
import StockDetails from '../pages/StockDetails';

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
      <Route path="/stockdetails/:stock" component={StockDetails} isPrivate />
    </Switch>
  );
};

export default Routes;
