import { AbstractClient } from 'rest-client-sdk';

class FileRepository extends AbstractClient {
  getPathBase() {
    return '/v1/me';
  }

  getEntityURI(entity) {
    return this.getPathBase();
  }

  getName() {
      return 'User';
  }

  getMe() {
    return this.deserializeResponse(this.authorizedFetch('/v1/me'), 'item');
  }
}

export default FileRepository;

