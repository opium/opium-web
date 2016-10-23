import { Map } from 'immutable';

export const OPIUM_REQUEST_DIRECTORY = '@@opium/REQUEST_DIRECTORY';
export const OPIUM_RECEIVE_DIRECTORY = '@@opium/RECEIVE_DIRECTORY';
export const OPIUM_REQUEST_FILE = '@@opium/REQUEST_FILE';
export const OPIUM_RECEIVE_FILE = '@@opium/RECEIVE_FILE';
export const OPIUM_REMOVE_CURRENT_FILE = '@@opium/REMOVE_CURRENT_FILE';

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

    case OPIUM_REQUEST_FILE:
      return state.merge({
        'isFetchingFile': true,
      });

    case OPIUM_RECEIVE_FILE:
      return state.merge({
        'currentFile': action.file,
        'isFetchingFile': false,
      });

    case OPIUM_REMOVE_CURRENT_FILE:
      return state.merge({
        'currentFile': null,
        'isFetchingFile': false,
      });

    default:
      return state;
  }
}

