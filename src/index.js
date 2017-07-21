import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import Helmet from 'react-helmet';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './Opium.css';
import configureSdk from './Sdk';
import Routes from './Route';
import reducer from './Reducer';
import apiErrorMiddleware from './Action/Middleware/ApiErrorMiddleware';

window.container = {};
window.container.sdk = configureSdk();

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'Mapado booking' })) ||
  compose;
/* eslint-enable */

  const history = createHistory();


const middlewares = [
  apiErrorMiddleware,
  thunk,
  routerMiddleware(history)
];

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

ReactDOM.render(
  (
    <div>
      <Helmet titleTemplate="%s | Opium">
        <title>Opium</title>
      </Helmet>
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    </div>
  ),
  document.getElementById('root')
);

registerServiceWorker();
