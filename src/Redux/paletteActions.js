import axios from 'axios';

const BASE_URL = 'https://dulce-palette-api.herokuapp.com/api/v1';

const getPalette = palette => ({
  type: 'GET_PALETTE',
  payload: palette,
});

const loadPalette = () => dispatch => {
  axios.get(`${BASE_URL}/palettes`).then(res => {
    dispatch(getPalette(res.data));
  }).catch(error => {
    throw (error);
  });
};

export default {
  loadPalette,
};
