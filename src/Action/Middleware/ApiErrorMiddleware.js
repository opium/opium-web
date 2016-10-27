import { AccessDeniedError, ForbiddenError } from 'rest-client-sdk';
import { push } from 'react-router-redux';
// import { LOGIN_ERROR } from '../actions/user';


const apiError = store => next => action => {
  // Call the next dispatch method in the middleware chain.
  try {
    const returnValue = next(action);

    // Check if it's a promise
    if (typeof returnValue === 'object' && typeof returnValue.then === 'function') {
      returnValue.catch(err => {
        const isFetchError = err instanceof TypeError && err.message === 'Failed to fetch';

        // 2 options here: It can be a 500 error
        // But most likely it's an "Unauthorized Access error"
        // Basically the access token is invalid, but in production we do
        // all the queries with CORS
        // We can't read the response when we have a 4xx or 5xx response
        // So we have an exception "Failed to fetch"
        // In this case, we'll manually refresh the access token and retry the action
        if (err instanceof AccessDeniedError || err instanceof ForbiddenError || isFetchError) {
          return next(push('/login'));
        } else {
          throw err;
        }
      });
    // } else {
    //   if (typeof returnValue === 'object' &&
    //       typeof returnValue.type !== 'undefined' &&
    //       returnValue.type === LOGIN_ERROR
    //   ) {
    //     const loginError = returnValue.error;
    //   }
    }

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  } catch (error) {
  }
};

export default apiError;
