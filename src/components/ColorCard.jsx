import React from 'react';
import PropTypes from 'prop-types';


function ColorCard({colorArray}) {
  return (
    <div className="ui raised card">
      colorArray.map(color => (
        <ColorDrop key={color} color={color} />
      ))
    </div>
  )
}

ColorCard.propTypes = {
  colorArray: PropTypes.instanceOf(Array).isRequired,
};


export default ColorCard;
