import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'proptypes';
import { Button } from 'semantic-ui-react';
import favoriteActions from '../Redux/favoritesActions';
import paletteActions from '../Redux/paletteActions';
import ColorDrop from './ColorDrop';

const ColorCard = ({ displayButton }) => {
  const colorArray = useSelector(state => state.palette.palette, shallowEqual) || [];
  const colorDrops = colorArray.color_palette || [];
  const paletteId = colorArray.id || '';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(paletteActions.loadPalette());
  }, [dispatch]);

  const addToFavorites = paletteId => {
    dispatch(favoriteActions.addToFavorites(paletteId));
  };
  const removeFromFavorites = paletteId => {
    dispatch(favoriteActions.removeFromFavorites(paletteId));
  };

  const actionButton = displayButton === 'favorites' ? (
    <Button content="Remove" icon="heart" className="save-button" onClick={() => {removeFromFavorites(paletteId)}} />
  ) : (
    <Button content="Save" icon="heart" className="save-button" onClick={() => addToFavorites(paletteId)} />
  );

  return (
    <div className="ui raised card">
      <div className="color-container">
        {colorDrops.map(color => (
          <ColorDrop key={color} color={color} />
        ))}
        {actionButton}
      </div>
    </div>
  );
};

ColorCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  displayButton: PropTypes.string,
};

export default ColorCard;
