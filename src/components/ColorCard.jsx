import React from 'react';
import PropTypes from 'proptypes';
import ColorDrop from './ColorDrop';

const ColorCard = ({ colorArray }) => (
  <div className="ui raised card">
    <div className="color-container">
      {colorArray.map(color => (
        <ColorDrop key={color} color={color} />
      ))}
    </div>
  </div>
);

ColorCard.propTypes = {
  colorArray: PropTypes.instanceOf(Array).isRequired,
};

export default ColorCard;
