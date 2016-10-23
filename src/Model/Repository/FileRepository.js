import { AbstractClient } from 'rest-client-sdk';

class FileRepository extends AbstractClient {
  getPathBase() {
    return '/v1/files';
  }

  getName() {
      return 'File';
  }
}

export default FileRepository;
