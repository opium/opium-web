import { AbstractClient } from 'rest-client-sdk';

class FileRepository extends AbstractClient {
  getPathBase() {
    return '/v1/me';
  }

  getName() {
      return 'User';
  }

  getMe() {
    return this.createEntityFromJsonResponse(this.authorizedFetch('/v1/me'), 'item');
  }
}

export default FileRepository;

