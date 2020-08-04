import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/auth';

const setUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

const clearUser = () => ({
  type: 'CLEAR_USER',
});

const registerUser = userObj => ({
  type: 'NEW_USER',
  payload: userObj,
});

const loginUser = userObj => dispatch => {
  axios.post(`${BASE_URL}/sign_in`, userObj).then(res => {
    dispatch(setUser(res.data.data));
    localStorage.setItem('user', JSON.stringify({ current: res.data.data, headers: res.headers }));
  }).catch(error => {
    throw (error);
  });
};

const logoutUser = () => dispatch => {
  const headers = JSON.parse(localStorage.user);
  axios.delete(`${BASE_URL}/sign_out`, { headers });
  dispatch(clearUser());
  localStorage.removeItem('user');
};

const newUser = userObj => dispatch => {
  axios.post(`${BASE_URL}`, userObj).then(res => {
    dispatch(registerUser(res.data.data));
    dispatch(setUser(res.data.data));
    localStorage.setItem('user', JSON.stringify({ current: res.data.data, headers: res.headers }));
  }).catch(error => {
    throw (error);
  });
};

export default {
  loginUser,
  logoutUser,
  newUser,
};
