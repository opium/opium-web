import { AbstractClient } from 'rest-client-sdk';

class DirectoryRepository extends AbstractClient {
  getPathBase() {
    return '/v1/directories';
  }

  getName() {
      return 'Directory';
  }
}

export default DirectoryRepository;
