import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Directory from './Container/Directory';
import DirectoryMap from './Container/DirectoryMapContainer';
import File from './Container/File';
import Login from './Container/LoginContainer';
import Upload from './Container/UploadContainer';
import Layout from './Container/LayoutContainer';
import {
  ROUTE_PALETTE,
  ROUTE_LOGIN,
  ROUTE_UPLOAD,
  ROUTE_DIRECTORY_MAP,
} from './RouteName';

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
    <Route component={Layout}>
      <Route path="/" component={Directory} />

      <Route path={ROUTE_PALETTE} component={Palette} />
      <Route path={ROUTE_LOGIN} component={Login} />
      <Route path={`${ROUTE_UPLOAD}`} component={Upload} />
      <Route path={`${ROUTE_UPLOAD}:directorySlug`} component={Upload} />
      <Route path={`${ROUTE_DIRECTORY_MAP}:directorySlug`} component={DirectoryMap} />

      <Route path=":directorySlug" component={Directory}>
        <Route path=":fileSlug" component={File} />
      </Route>
    </Route>
  </Router>);
};
