import React from 'react';
import PropTypes from 'propTypes';

const ColorDrop = ({ color, id }) => (
  <div id="color-drop" style={{ backgroundColor: { color } }} />
);

ColorDrop.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColorDrop;
