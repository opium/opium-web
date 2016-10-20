import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './Component/App';
import configureSdk from './Sdk';

window.container = {};
window.container.sdk = configureSdk();


window.container.sdk.directory.findBy({ gutter: 10 })
  .then(directory => {
    ReactDOM.render(
      <App directory={directory} />,
      document.getElementById('root')
    );
  })
;


