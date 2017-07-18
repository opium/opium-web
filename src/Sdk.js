import RestClientSdk, { TokenStorage } from 'rest-client-sdk';
import localforage from 'localforage';
import DirectoryRepository from './Model/Repository/DirectoryRepository';
import FileRepository from './Model/Repository/FileRepository';
import UserRepository from './Model/Repository/UserRepository';
import { entityFactory } from './Model/Factory';
import { tokenGenerator, apiConfig } from './Config';

export const tokenStorage = new TokenStorage(tokenGenerator, localforage);

export default function configureSdk() {
  const clients = {
    directory: DirectoryRepository,
    file: FileRepository,
    user: UserRepository,
  };

  return new RestClientSdk(tokenStorage, apiConfig, clients, entityFactory);
}
