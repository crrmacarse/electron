import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../constants/routes.json';
import HomePage from '../containers/public/home';
import CounterPage from '../containers/sample/CounterPage';
import AdminDashboard from '../containers/admin/dashboard';
import App from './app';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.ADMIN} component={AdminDashboard} />
      </Switch>
    </App>
  );
}
