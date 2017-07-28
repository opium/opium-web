import { AbstractClient } from 'rest-client-sdk';

class DirectoryRepository extends AbstractClient {
  getPathBase() {
    return '/v1/directories';
  }

  getEntityURI(entity) {
    return `${this.getPathBase()}/${entity.slug}`;
  }

  getName() {
      return 'Directory';
  }

  uploadFile(directory, file) {
    const data = new FormData();
    data.append('file', file);

    const dirWithSlash = directory && `/${directory}`;

    return this.deserializeResponse(
      this.authorizedFetch(`${this.getPathBase()}${dirWithSlash}/upload`, {
        headers: {
          'Content-Type': undefined, // remove content type as it will be generate by client
        },
        method: 'POST',
        body: data
      }),
      'item'
    );
  }
}

export default DirectoryRepository;
