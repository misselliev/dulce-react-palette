import { combineReducers } from 'redux';
import user from './userReducer';
import favorites from './favoritesReducer';

export default combineReducers({ user, favorites });
