import { combineReducers } from 'redux';
import leads from './leads';
import auth from './auth';

export default combineReducers({
  leads,
  auth,
});