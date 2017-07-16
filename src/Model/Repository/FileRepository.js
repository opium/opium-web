import { AbstractClient } from 'rest-client-sdk';

class FileRepository extends AbstractClient {
  getPathBase() {
    return '/v1/files';
  }

  getName() {
      return 'File';
  }

  getFile(file) {
    return this._doFetch(file);
  }
}

export default FileRepository;
