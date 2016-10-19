import RestClientSdk, { TokenStorage, ProvidedTokenGenerator } from 'rest-client-sdk';
import DirectoryRepository from './Model/Repository/DirectoryRepository';
import localforage from 'localforage';

export default function configureSdk() {
  const tokenGenerator = new ProvidedTokenGenerator('dGVzdDp0ZXN0');
  const tokenStorage = new TokenStorage(tokenGenerator, localforage);

  const apiConfig = {
    path: 'demo.opium.sitioweb.fr',
    scheme: 'http',
    authorizationType: 'Basic',
  };

  const clients = {
    directory: DirectoryRepository,
  };

  return new RestClientSdk(tokenStorage, apiConfig, clients);
}
