Opium web client [![Build Status](https://travis-ci.org/opium/opium-web.svg?branch=react)](https://travis-ci.org/opium/opium-web)
===========

Web interface for Opium

## Demo
A live demo is available [here](https://opium.github.io)

## Installation
  * Clone the project
  * `npm install`  (or `yarn install`)
  * Update the `src/Config.js` file. Opium leverage the power of [rest-client-sdk](https://github.com/mapado/rest-client-js-sdk) internally. You may want to read it's doc to see how to configure your API config.
  * [Configure your webserver](https://github.com/opium/opium-server)
  * `npm run build`
  
## Hacking
  * `npm start` (instead of `npm run build`)
  * open [http://localhost:3000](http://localhost:3000)

## Constraints
  * Photo folder should not be named `opium` as it is used by the application internally
