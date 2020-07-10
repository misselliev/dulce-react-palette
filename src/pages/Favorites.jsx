import React from 'react';
import {
  Header, Icon, Grid,
} from 'semantic-ui-react';
import '../styles/styles-favorites.css';
import ColorCard from '../components/ColorCard';

const FavoritesPage = () => {
  const test = ['rgb(170, 121, 242)',
'rgb(242, 121, 203)',
'rgb(242, 181, 121)',
'rgb(164, 242, 121)',
'rgb(242, 121, 230)'];

  return (
    <Grid textAlign="center" className="middle aligned wall favorites">
      <Grid.Column className="favorite-column">
        <Header as="h2" className="login-header" textAlign="center">
          <Icon name="heart" />
          Favorites
        </Header>
        <ColorCard colorArray={test} />
      </Grid.Column>
    </Grid>
  );
};

export default FavoritesPage;
