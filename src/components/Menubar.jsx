import React from 'react';

const Menubar = () => (
  <div className="ui menu">
    <a className="header item" href="#top">
      <i className="paw icon" />
      Dulce Palette
    </a>
    <div className="menu right">
      <a className="item" href="#top">
        <i className="user icon" />
        Signup
      </a>
      <a className="item" href="#top">
        <i className="user icon" />
        Login
      </a>
      <a className="item" href="#top">
        <i className="heart icon" />
        Favorites
      </a>
    </div>
  </div>
);

export default Menubar;
