import { Map } from 'immutable';

export const OPIUM_REQUEST_DIRECTORY = '@@opium/REQUEST_DIRECTORY';
export const OPIUM_RECEIVE_DIRECTORY = '@@opium/RECEIVE_DIRECTORY';

export default function opiumReducer(state = Map(), action) {
  switch (action.type) {
    case OPIUM_REQUEST_DIRECTORY:
      return state.merge({
        'isFetchingDirectory': true,
      });

    case OPIUM_RECEIVE_DIRECTORY:
      return state.merge({
        'currentDirectory': action.directory,
        'isFetchingDirectory': false,
      });

    default:
      return state;
  }
}

