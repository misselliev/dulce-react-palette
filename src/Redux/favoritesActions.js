import axios from 'axios';

const addFavorite = item => ({
  type: 'ADD_FAVORITE',
  payload: item,
});

const removeFavorite = item => ({
  type: 'REMOVE_FAVORITE',
  payload: item,
});

const loadFavorites = favorites => ({
  type: 'LOAD_FAVORITES',
  payload: favorites,
});

const addToFavorites = item => dispatch => {
  dispatch(addFavorite(item));
};

const fetchFavorites = () => dispatch => {
  const headers = JSON.parse(localStorage.user);
  axios.get('https://dulce-palette-api.herokuapp.com/api/v1/palettes', { headers }).then(res => {
    dispatch(loadFavorites(res.data));
  }).catch(error => {
    throw (error);
  });
};

const removeFromFavorites = item => dispatch => {
  dispatch(removeFavorite(item));
};

export default {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
};
