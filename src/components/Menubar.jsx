import React from 'react';

const Menubar = () => (
  <div className="ui menu">
    <a className="header item" href="#top">
      <img src="src/images/paw.png" className="ui mini image" alt="paw-ng" />
      Dulce Palette
    </a>
    <div className="menu right">
      <a className="item" href="#top">Signup</a>
      <a className="item" href="#top">Login</a>
      <a className="item" href="#top">Favorites</a>
    </div>
  </div>
);

export default Menubar;
