import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import StartPage from './pages/Start/Start.page';
import SmallGroupsPage from './pages/SmallGroups/SmallGroups.page';

import './app.scss';

const history = createHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route path="/small-groups" component={SmallGroupsPage} />
    </Switch>
  </Router>
);
