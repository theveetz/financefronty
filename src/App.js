import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Overview from './components/Dashboard/Overview';
import Transactions from './components/Dashboard/Transactions';
import Analytics from './components/Dashboard/Analytics';
import Profile from './components/Settings/Profile';
import AccountSettings from './components/Settings/AccountSettings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard/overview" component={Overview} />
        <Route path="/dashboard/transactions" component={Transactions} />
        <Route path="/dashboard/analytics" component={Analytics} />
        <Route path="/settings/profile" component={Profile} />
        <Route path="/settings/account" component={AccountSettings} />
        <Route path="/" exact component={Overview} />
      </Switch>
    </Router>
  );
}

export default App;
