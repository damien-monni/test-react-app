import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppLayout from './AppLayout';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export default class AppContent extends React.Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AppLayout>
    );
  }
}
