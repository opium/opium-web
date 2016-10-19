import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './Component/App';
import configureSdk from './Sdk';

window.container = {};
window.container.sdk = configureSdk();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
