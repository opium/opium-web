import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import OpiumReducer from './OpiumReducer';
import ImageLoaderReducer from './ImageLoaderReducer';

export default combineReducers(
  {
    opium: OpiumReducer,
    imageLoader: ImageLoaderReducer,
    routing: routerReducer,
  }
);
