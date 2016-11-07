import { push } from 'react-router-redux';
import {
  OPIUM_RECEIVE_DIRECTORY,
  OPIUM_REQUEST_DIRECTORY,
} from '../Reducer/OpiumReducer';

export function find(slug) {
  return dispatch => {
    dispatch({ type: OPIUM_REQUEST_DIRECTORY });

    const finder = slug ?
      window.container.sdk.directory.find(slug, { gutter: 10 }) :
      window.container.sdk.directory.findBy({ gutter: 10 })

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

export function uploadFile(directorySlug, file) {
  return dispatch => {
    window.container.sdk.directory.uploadFile(directorySlug, file)
        .then(uploadedFile => {
          dispatch(push(`/${directorySlug}`));
        })
    ;
  };
}