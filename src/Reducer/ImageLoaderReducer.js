import { Map, Set } from 'immutable';

export const OPIUM_REQUEST_IMAGE_LOAD = '@@opium/REQUEST_IMAGE_LOAD';
export const OPIUM_RECEIVE_IMAGE_LOADED = '@@opium/RECEIVE_IMAGE_LOADED';

export default function opiumReducer(state = Map(), action) {
  switch (action.type) {
    case OPIUM_REQUEST_IMAGE_LOAD:
      return state.merge({
        'isFetchingImage': true,
      });

    case OPIUM_RECEIVE_IMAGE_LOADED:
      return state.mergeDeep({
        'loadedImages': Set.of(action.image),
        'isFetchingImage': false,
      });

    default:
      return state;
  }
}
