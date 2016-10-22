import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Directory from './Container/Directory';
import File from './Container/File';


export default function configureRoutes(store) {
  const history = syncHistoryWithStore(browserHistory, store);

  return (<Router history={history}>
    <Route path="/" component={Directory} />
    <Route path=":directorySlug" component={Directory}>
      <Route path=":fileSlug" component={File} />
    </Route>
    <Route path="/pacific-ocean/2010-mavericks-competition-edit1-jpg" component={File} />
  </Router>);
};
