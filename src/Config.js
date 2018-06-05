import { ProvidedTokenGenerator } from 'rest-client-sdk';

// Opium leverage the power of https://github.com/mapado/rest-client-js-sdk internally
// You may want to read it's doc to see how to configure your API config

export const tokenGenerator = new ProvidedTokenGenerator(null);
export const apiConfig = {
  // path: 'demo.opium.deniau.me',
  path: 'leela.deniau.me:8000',
  scheme: 'http',
  authorizationType: 'Basic',
};
