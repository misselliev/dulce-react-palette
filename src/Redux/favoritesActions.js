import axios from 'axios';

const BASE_URL = 'https://dulce-palette-api.herokuapp.com/api/v1';

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
  axios.post(`${BASE_URL}/favorites`, item).then(res => {
    if (!res.data === 'error') {
      dispatch(addFavorite(res.config.data));
    }
  }).catch(error => {
    throw (error);
  });
};

const fetchFavorites = () => dispatch => {
  const headers = JSON.parse(localStorage.user);
  axios.get(`${BASE_URL}/favorites`, { headers }).then(res => {
    dispatch(loadFavorites(res.data));
  }).catch(error => {
    throw (error);
  });
};

const removeFromFavorites = item => dispatch => {
  const headers = JSON.parse(localStorage.user);
  axios.delete(`${BASE_URL}/favorites/${item}`, { headers }).then(() => {
    dispatch(removeFavorite(item));
  }).catch(error => {
    throw (error);
  });
};

export default {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
};
