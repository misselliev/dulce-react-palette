export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_PALETTE':
      return { ...state, palettes: payload };
    default:
      return state;
  }
};
