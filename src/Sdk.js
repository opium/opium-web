import RestClientSdk, { Mapping, ClassMetadata, Attribute, Relation, TokenStorage } from 'rest-client-sdk';
import localforage from 'localforage';
// import DirectoryRepository from './Model/Repository/DirectoryRepository';
// import FileRepository from './Model/Repository/FileRepository';
// import UserRepository from './Model/Repository/UserRepository';
import serializer from './Model/Factory';
import { tokenGenerator, apiConfig } from './Config';

const mapping = new Mapping('/v2');

const directoryMetadata = new ClassMetadata(
  'directories'
);

directoryMetadata.setAttributeList([
  new Attribute('@id', 'id', 'string', true),
  new Attribute('name'),
  new Attribute('pathname'),
  new Attribute('displayableChildren', 'displayableChildren', 'array'),
  new Attribute('parent'),
  new Attribute('previous'),
  new Attribute('next'),
  new Attribute('slug'),
]);
directoryMetadata.setRelationList([
  new Relation(
    Relation.ONE_TO_MANY,
    'files',
    'displayableChildren'
  ),
  new Relation(
    Relation.MANY_TO_ONE,
    'directory',
    'parent'
  ),
  new Relation(
    Relation.MANY_TO_ONE,
    'directory',
    'previous'
  ),
  new Relation(
    Relation.MANY_TO_ONE,
    'directory',
    'next'
  ),
]);

const userMetadata = new ClassMetadata('users');

userMetadata.setAttributeList([
  new Attribute('username', 'username', 'string', true),
  new Attribute('roles', 'roles', 'array')
]);
mapping.setMapping([ directoryMetadata, userMetadata ]);


export const tokenStorage = new TokenStorage(tokenGenerator, localforage);

export default function configureSdk() {
  // const clients = {
  //   directory: DirectoryRepository,
  //   file: FileRepository,
  //   user: UserRepository,
  // };

  return new RestClientSdk(tokenStorage, apiConfig, mapping, serializer);
}
