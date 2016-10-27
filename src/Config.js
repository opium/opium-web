import { ProvidedTokenGenerator } from 'rest-client-sdk';

// Opium leverage the power of https://github.com/mapado/rest-client-js-sdk internally
// You may want to read it's doc to see how to configure your API config

export const tokenGenerator = new ProvidedTokenGenerator('dGVzdDp0ZXN0');
export const apiConfig = {
  path: 'demo.opium.sitioweb.fr',
  scheme: 'http',
  authorizationType: 'Basic',
};
