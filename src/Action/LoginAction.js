import { push } from 'react-router-redux';

import {
  OPIUM_REQUEST_ME,
  OPIUM_RECEIVE_ME,
} from '../Reducer/OpiumReducer';

export function doLogin(values) {
  return dispatch => {
    const token = btoa(`${values.login}:${values.password}`);

    dispatch({ type: OPIUM_REQUEST_ME });
    window.container.sdk.tokenStorage._storeAccessToken({ access_token: token })
      .then(() => window.container.sdk.user.getMe())
      .then(me => dispatch({
        type: OPIUM_RECEIVE_ME,
        me,
      }))
      .then(() => dispatch(push('/')))
    ;
    // window.container.sdk.directory.find(slug, { gutter: 10 });

    // window.oauthClient.getUserToken(values.email, values.password, 'ogip')
    //   .then(accessToken => {
    //     userApi.findMe()
    //       .then(me => {
    //         dispatch({
    //           type: 'RECEIVE_ME',
    //           me,
    //         });

    //         dispatch(push('/'));
    //       })
    //     ;
    //   })
    //   .catch(() => {
    //     dispatch({
    //       type: 'ALERT',
    //       style: 'warning',
    //       message: 'Nom d\'utilisateur ou mot de passe incorrect',
    //       dismissAfter: 5000,
    //     });
    //   })
    // ;
  };
}
