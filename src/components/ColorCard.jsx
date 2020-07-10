import React from 'react';
import PropTypes from 'proptypes';
import { Button } from 'semantic-ui-react';
import ColorDrop from './ColorDrop';

const ColorCard = ({ colorArray }) => (
  <div className="ui raised card">
    <div className="color-container">
      {colorArray.map(color => (
        <ColorDrop key={color} color={color} />
      ))}
      <Button content="Save" icon="heart" className="save-button" />
    </div>
  </div>
);

ColorCard.propTypes = {
  colorArray: PropTypes.instanceOf(Array).isRequired,
};

export default ColorCard;
