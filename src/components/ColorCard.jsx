import React from 'react';
import PropTypes from 'proptypes';
import ColorDrop from './ColorDrop';

const ColorCard = ({ colorArray }) => (
  <div className="ui raised card">
    {colorArray.map(color => (
      <ColorDrop key={color} color={color} />
    ))}
  </div>
);

ColorCard.propTypes = {
  colorArray: PropTypes.instanceOf(Array).isRequired,
};

export default ColorCard;
