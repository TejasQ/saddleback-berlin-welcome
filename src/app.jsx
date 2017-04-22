import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import StartPage from './pages/Start/Start.page';
import SmallGroupsPage from './pages/SmallGroups/SmallGroups.page';
import MinistriesPage from './pages/Ministries/Ministries.page';
import MinistryPage from './pages/Ministry/Ministry.page';
import EventsPage from './pages/Events/Events.page';
import EventPage from './pages/Event/Event.page';

import './app.scss';

const history = createHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route path="/small-groups" component={SmallGroupsPage} />
      <Route exact path="/ministries" component={MinistriesPage} />
      <Route path="/ministries/:id" component={MinistryPage} />
      <Route exact path="/events" component={EventsPage} />
      <Route path="/events/:id" component={EventPage} />
    </Switch>
  </Router>
);
