import { combineReducers } from 'redux';
import { squareReducer } from './squareReducer';

export const Reducers = combineReducers({
  data: squareReducer
});