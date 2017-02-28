import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StartPage from './pages/Start/Start.page';
import SmallGroupsPage from './pages/SmallGroups/SmallGroups.page';

import './app.scss';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route path="/small-groups" component={SmallGroupsPage} />
    </Switch>
  </Router>
);
