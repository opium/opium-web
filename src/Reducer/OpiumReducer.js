import { Map } from 'immutable';

export const OPIUM_REQUEST_DIRECTORY = '@@opium/REQUEST_DIRECTORY';
export const OPIUM_REQUEST_DIRECTORY_COVER_CHANGE = '@@opium/REQUEST_DIRECTORY_COVER_CHANGE';
export const OPIUM_RECEIVE_DIRECTORY = '@@opium/RECEIVE_DIRECTORY';
export const OPIUM_REQUEST_FILE = '@@opium/REQUEST_FILE';
export const OPIUM_RECEIVE_FILE = '@@opium/RECEIVE_FILE';
export const OPIUM_REMOVE_CURRENT_FILE = '@@opium/REMOVE_CURRENT_FILE';

export const OPIUM_REQUEST_ME = '@@opium/REQUEST_ME';
export const OPIUM_RECEIVE_ME = '@@opium/RECEIVE_ME';

export default function opiumReducer(state = Map(), action) {
  switch (action.type) {
    case OPIUM_REQUEST_DIRECTORY:
    case OPIUM_REQUEST_DIRECTORY_COVER_CHANGE:
      return state.merge({
        isFetchingDirectory: true,
      });

    case OPIUM_RECEIVE_DIRECTORY:
      let newState = state;
      if (state.getIn(['currentFile', 'parent', 'id']) === action.directory.id) {
        newState = state.setIn(['currentFile', 'parent'], action.directory);
      }
      return newState.merge({
        currentDirectory: action.directory,
        isFetchingDirectory: false,
      });

    case OPIUM_REQUEST_FILE:
      return state.merge({
        isFetchingFile: true,
      });

    case OPIUM_RECEIVE_FILE:
      return state.merge({
        currentFile: action.file,
        isFetchingFile: false,
      });

    case OPIUM_REMOVE_CURRENT_FILE:
      return state.merge({
        currentFile: null,
        isFetchingFile: false,
      });

    case OPIUM_REQUEST_ME:
        return state.merge({
          isFetchingMe: true,
        });

    case OPIUM_RECEIVE_ME:
        return state.merge({
          me: action.me,
          isFetchingMe: false,
        });

    default:
      return state;
  }
}

