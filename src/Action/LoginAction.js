import { push } from 'react-router-redux';

export function doLogin(values) {
  return dispatch => {
    const token = btoa(`${values.login}:${values.password}`);
    window.container.sdk.tokenStorage._storeAccessToken({ access_token: token })
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
