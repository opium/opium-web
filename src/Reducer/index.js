import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import opiumReducer from './OpiumReducer';

export default combineReducers(
  {
    opium: opiumReducer,
    routing: routerReducer,
  }
);
