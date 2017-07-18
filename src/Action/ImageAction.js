import {
  OPIUM_REQUEST_IMAGE_LOAD,
  OPIUM_RECEIVE_IMAGE_LOADED,
} from '../Reducer/ImageLoaderReducer';
import FileWithToken from '../Tool/FileWithToken';

export function loadImage(src) {
  return dispatch => {
    dispatch({ type: OPIUM_REQUEST_IMAGE_LOAD });

    FileWithToken(src)
      .then((localSrc) => {
        dispatch({ type: OPIUM_RECEIVE_IMAGE_LOADED, image: src, localImage: localSrc });
      })
    .catch(console.error)
    ;
  }
};
