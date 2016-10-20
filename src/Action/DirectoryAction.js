import {
  OPIUM_RECEIVE_DIRECTORY,
  OPIUM_REQUEST_DIRECTORY,
} from '../Reducer/OpiumReducer';

export function find() {
  return dispatch => {
    dispatch({ type: OPIUM_REQUEST_DIRECTORY });

    window.container.sdk.directory.findBy({ gutter: 10 })
      .then(directory => {
        dispatch({
          type: OPIUM_RECEIVE_DIRECTORY,
          directory,
        });
      })
    ;
  }
}
