export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_FAVORITES':
      return { ...state, favorites: payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(item => item !== payload) };
    default:
      return state;
  }
};
