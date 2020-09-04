export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_PALETTE':
      return { ...state, palette: payload };
    default:
      return state;
  }
};
