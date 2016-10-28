import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Directory from './Container/Directory';
import File from './Container/File';
import Login from './Container/LoginContainer';


const Palette = () =>
  <div style={{ display: 'flex', height: '400px' }}>
    <div className="bg-color-primary-0" style={{ flexGrow: 1 }} />
    <div className="bg-color-primary-1" style={{ flexGrow: 1 }} />
    <div className="bg-color-primary-2" style={{ flexGrow: 1 }} />
    <div className="bg-color-primary-3" style={{ flexGrow: 1 }} />
    <div className="bg-color-primary-4" style={{ flexGrow: 1 }} />
  </div>
;

export default function configureRoutes(store) {
  const history = syncHistoryWithStore(browserHistory, store);

  return (<Router history={history}>
    <Route path="/" component={Directory} />
    <Route path="palette" component={Palette} />

    <Route path="login" component={Login} />

    <Route path=":directorySlug" component={Directory}>
      <Route path=":fileSlug" component={File} />
    </Route>
  </Router>);
};
