import {
OPIUM_RECEIVE_FILE,
OPIUM_REQUEST_FILE,
OPIUM_REMOVE_CURRENT_FILE,
} from '../Reducer/OpiumReducer';

export function find(slug) {
return dispatch => {
  dispatch({ type: OPIUM_REQUEST_FILE });

  return window.container.sdk.getRepository('files').find(slug)
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

export function updateFilePosition(file, lat, lng) {
return dispatch => {
  dispatch({ type: OPIUM_REQUEST_FILE });

  const newFile = file.merge({
    position: { lat, lng }
  });

  return window.container.sdk.getRepository('files').update(newFile)
      .then(file => {
        dispatch({
          type: OPIUM_RECEIVE_FILE,
          file,
        });
      })
    ;
  }
}
