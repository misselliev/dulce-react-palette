import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'proptypes';
import { Button } from 'semantic-ui-react';
import favoriteActions from '../Redux/favoritesActions';
import ColorDrop from './ColorDrop';

const ColorCard = ({ colorArray, displayButton }) => {
  const dispatch = useDispatch();
  const addToFavorites = colorArray => {
    dispatch(favoriteActions.addToFavorites(colorArray));
  };
  const removeFromFavorites = colorArray => {
    dispatch(favoriteActions.removeFromFavorites(colorArray));
  };

  const actionButton = displayButton === 'favorites' ? (
    <Button content="Remove" icon="heart" className="save-button" onClick={() => removeFromFavorites(colorArray)} />
  ) : (
    <Button content="Save" icon="heart" className="save-button" onClick={() => addToFavorites({ colorArray })} />
  );

  return (
    <div className="ui raised card">
      <div className="color-container">
        {colorArray.map(color => (
          <ColorDrop key={color} color={color} />
        ))}
        {actionButton}
      </div>
    </div>
  );
};

ColorCard.propTypes = {
  colorArray: PropTypes.instanceOf(Array).isRequired,
  // eslint-disable-next-line react/require-default-props
  displayButton: PropTypes.string,
};

export default ColorCard;
