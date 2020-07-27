import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Header, Icon, Grid,
} from 'semantic-ui-react';
import '../styles/styles-favorites.css';
import ColorCard from '../components/ColorCard';
import favoritesActions from '../Redux/favoritesActions';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.favorites, shallowEqual) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favoritesActions.fetchFavorites(favorites));
  }, [dispatch, favorites]);

  return (
    <Grid textAlign="center" className="middle aligned wall favorites">
      <Grid.Column className="favorite-column">
        <Header as="h2" className="login-header" textAlign="center">
          <Icon name="heart" />
          Favorites
        </Header>
        {favorites.map(color => (
          <ColorCard colorArray={color} key={color} displayButton="favorites" />
        ))}
      </Grid.Column>
    </Grid>
  );
};

export default FavoritesPage;
