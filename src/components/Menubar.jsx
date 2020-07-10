import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Menubar = () => (
  <Menu>
    <Link className="header item" to="/">
      <i className="paw icon" />
      Dulce Palette
    </Link>
    <Menu.Item className="menu right">
      <Link className="item" href="/signup" to="/signup">
        <i className="user icon" />
        Signup
      </Link>
      <Link className="item" href="/login" to="/login">
        <i className="user icon" />
        Login
      </Link>
      <Link className="item" href="/favorites" to="/favorites">
        <i className="heart icon" />
        Favorites
      </Link>
    </Menu.Item>
  </Menu>
);

export default Menubar;
