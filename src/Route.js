import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Directory from './Container/Directory';
import Image from './Container/Image';


export default function configureRoutes(store) {
  const history = syncHistoryWithStore(browserHistory, store);

  return (<Router history={history}>
    <Route path="/" component={Directory} />
    <Route path="/:slug" component={Directory} />
    <Route path="/pacific-ocean/2010-mavericks-competition-edit1-jpg" component={Image} />
  </Router>);
};
