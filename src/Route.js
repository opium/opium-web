import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Directory from './Container/DirectoryContainer';
import DirectoryMap from './Container/DirectoryMapContainer';
import File from './Container/FileContainer';
import Login from './Container/LoginContainer';
import Upload from './Container/UploadContainer';
import Layout from './Container/LayoutContainer';
import CreateDir from './Component/CreateDir';
import {
  ROUTE_CREATE_DIR,
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

export default function Routes({ history }) {
  return (<ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Layout} />
        <Route exact strict path="/" component={Directory} />

        <Route exact strict path={ROUTE_PALETTE} component={Palette} />
        <Route exact strict path={ROUTE_LOGIN} component={Login} />
        <Route exact strict path={ROUTE_UPLOAD} component={Upload} />
        <Route exact strict path={`${ROUTE_UPLOAD}:directorySlug`} component={Upload} />

        <Route exact strict path={`${ROUTE_DIRECTORY_MAP}:directorySlug`} component={DirectoryMap} />

        <Route exact strict path={ROUTE_CREATE_DIR} component={CreateDir} />
        <Route exact strict path={`${ROUTE_CREATE_DIR}:directorySlug`} component={CreateDir} />

        <Route exact strict path="/:directorySlug/" component={Directory} />
        <Route exact strict path="/:directorySlug/:fileSlug" component={File} />

        <Route exact strict path="/:fileSlug" component={File} />
      </div>
  </ConnectedRouter>);
};
