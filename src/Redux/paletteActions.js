import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const getPalette = palette => ({
  type: 'GET_PALETTE',
  payload: palette,
});

const loadPalette = () => dispatch => {
  axios.get(`${BASE_URL}/palettes`).then(res => {
    dispatch(getPalette(res.data.color_palette));
  }).catch(error => {
    throw (error);
  });
};

const removePalette = () => dispatch => {
  axios.get('http://localhost:3000/api/v1/palettes').then(res => {
    dispatch(getPalette(res.data.color_palette));
  }).catch(error => {
    throw (error);
  });
};

export default {
  loadPalette,
  removePalette,
};
