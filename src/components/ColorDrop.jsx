/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'proptypes';

class ColorDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropName: props.color,
      dropbackground: props.color,
    };
  }

  render() {
    return (
      <div className="color-card">
        <div className="color-drop" style={{ backgroundColor: this.state.dropbackground, }} />
        <div className="color-name">{this.state.dropName}</div>
      </div>
    );
  }
}

ColorDrop.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorDrop;
