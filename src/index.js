import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import Helmet from 'react-helmet';
import 'normalize.css';
import './Opium.css';
import configureSdk from './Sdk';
import configureRoutes from './Route';
import reducer from './Reducer';

window.container = {};
window.container.sdk = configureSdk();

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});



const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  (
    <div>
      <Helmet title="Opium" titleTemplate="%s | Opium" />
      <Provider store={store}>
        {configureRoutes(store)}
      </Provider>
    </div>
  ),
  document.getElementById('root')
);


