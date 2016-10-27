import RestClientSdk, { TokenStorage } from 'rest-client-sdk';
import localforage from 'localforage';
import DirectoryRepository from './Model/Repository/DirectoryRepository';
import FileRepository from './Model/Repository/FileRepository';
import { entityFactory } from './Model/Factory';
import { tokenGenerator, apiConfig } from './Config';

export default function configureSdk() {
  const tokenStorage = new TokenStorage(tokenGenerator, localforage);

  const clients = {
    directory: DirectoryRepository,
    file: FileRepository,
  };

  return new RestClientSdk(tokenStorage, apiConfig, clients, entityFactory);
}
