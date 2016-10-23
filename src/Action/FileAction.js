import {
  OPIUM_RECEIVE_FILE,
  OPIUM_REQUEST_FILE,
  OPIUM_REMOVE_CURRENT_FILE,
} from '../Reducer/OpiumReducer';

export function find(slug) {
  return dispatch => {
    dispatch({ type: OPIUM_REQUEST_FILE });

    window.container.sdk.file.find(slug)
      .then(file => {
        dispatch({
          type: OPIUM_RECEIVE_FILE,
          file,
        });
      })
    ;
  }
}

export function removeCurrent() {
  return {
    type: OPIUM_REMOVE_CURRENT_FILE,
  };
}
