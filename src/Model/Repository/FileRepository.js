import { AbstractClient } from 'rest-client-sdk';

class FileRepository extends AbstractClient {
  getPathBase() {
    return '/v1/files';
  }

  getEntityURI(entity) {
    return `${this.getPathBase()}/${entity.slug}`;
  }

  getName() {
      return 'File';
  }
}

export default FileRepository;
