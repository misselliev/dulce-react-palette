import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'proptypes';
import { Button } from 'semantic-ui-react';
import favoriteActions from '../Redux/favoritesActions';
import ColorDrop from './ColorDrop';

const ColorCard = ({ colorArray }) => {
  const currentUser = useSelector(state => state.user.currentUser, shallowEqual) || [];
  const dispatch = useDispatch();
  const addToFavorites = (colorArray, currentUser) => {
    dispatch(favoriteActions.addToFavorites(colorArray, currentUser));
  };

  return (
    <div className="ui raised card">
      <div className="color-container">
        {colorArray.map(color => (
          <ColorDrop key={color} color={color} />
        ))}
        <Button content="Save" icon="heart" className="save-button" onClick={() => addToFavorites(colorArray, currentUser)} />
      </div>
    </div>
  );
};

ColorCard.propTypes = {
  colorArray: PropTypes.instanceOf(Array).isRequired,
};

export default ColorCard;
