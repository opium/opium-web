import {
  OPIUM_REQUEST_ME,
  OPIUM_RECEIVE_ME,
} from '../Reducer/OpiumReducer';

export function fetchMe() {
  return dispatch => {
    dispatch({ type: OPIUM_REQUEST_ME });

    return window.container.sdk.user.getMe()
      .then(me => dispatch({
        type: OPIUM_RECEIVE_ME,
        me,
      }))
    ;
  }
}
