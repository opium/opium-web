import {
  OPIUM_REQUEST_IMAGE_LOAD,
  OPIUM_RECEIVE_IMAGE_LOADED,
} from '../Reducer/ImageLoaderReducer';

function rawLoadImage(src) {
  return new Promise((resolve) => {
    const tmpImage = new Image();
    tmpImage.onload = (image) => {
      resolve(image.currentTarget.src);
    };
    tmpImage.src = src;
  });
}

export function loadImage(src) {
  return dispatch => {
    dispatch({ type: OPIUM_REQUEST_IMAGE_LOAD });

    rawLoadImage(src)
      .then(() => {
        dispatch({ type: OPIUM_RECEIVE_IMAGE_LOADED, image: src });
        // if (this.componentMounted) {
        //   this.setState({ isLoaded: true });
        // }

        // if (this.props.onLoad) {
        //   this.props.onLoad();
        // }
      })
    ;
  }
};
