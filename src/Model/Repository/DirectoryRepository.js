import { AbstractClient } from 'rest-client-sdk';

class DirectoryRepository extends AbstractClient {
  getPathBase() {
    return '/v1/directories';
  }

  getName() {
      return 'Directory';
  }

  uploadFile(directory, file) {
    const data = new FormData();
    data.append('file', file);

    const dirWithSlash = directory && `/${directory}`;

    return this.createEntityFromJsonResponse(
      this.authorizedFetch(`${this.getPathBase()}${dirWithSlash}/upload`, {
        method: 'POST',
        body: data
      }),
      'item'
    );
  }
}

export default DirectoryRepository;
