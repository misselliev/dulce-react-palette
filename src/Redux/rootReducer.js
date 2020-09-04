import { combineReducers } from 'redux';
import user from './userReducer';
import favorites from './favoritesReducer';
import palette from './paletteReducer';

export default combineReducers({ user, favorites, palette });
