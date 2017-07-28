import { push } from 'react-router-redux';
import {
  OPIUM_RECEIVE_DIRECTORY,
  OPIUM_REQUEST_DIRECTORY,
  OPIUM_REQUEST_DIRECTORY_COVER_CHANGE,
} from '../Reducer/OpiumReducer';
import Directory from '../Model/Directory';

export function find(slug) {
  return dispatch => {
    dispatch({ type: OPIUM_REQUEST_DIRECTORY });

    const finder = slug ?
      window.container.sdk.directory.find(slug) :
      window.container.sdk.directory.findBy({})

    return finder
      .then(directory => {
        dispatch({
          type: OPIUM_RECEIVE_DIRECTORY,
          directory,
        });
      })
    ;
  }
}

export function uploadFiles(directorySlug, files) {
  return dispatch => {
    Promise.all(files.map(file => window.container.sdk.directory.uploadFile(directorySlug, file)))
      .then(() => {
        dispatch(push(`/${directorySlug}/`));
      })
    ;
  };
}

export function updateDirectoryCover(directory, file) {
  return dispatch => {
    const newDir = directory.setIn(['_embedded', 'directory_thumbnail', 'id'], file.id);
    dispatch({ type: OPIUM_REQUEST_DIRECTORY_COVER_CHANGE });

    window.container.sdk.directory.update(newDir)
      .then(directory => {
        dispatch({
          type: OPIUM_RECEIVE_DIRECTORY,
          directory,
        });
      })
    ;
  };
}

export function createDir(dirName, parentSlug) {
  return dispatch => {
    const dir = new Directory({
      name: dirName,
      parent: new Directory({
        slug: parentSlug,
      }),
    });

    window.container.sdk.directory
      .create(dir)
      .then(dir => {
        dispatch(push(`/${dir.slug}/`));
      })
  };
}
