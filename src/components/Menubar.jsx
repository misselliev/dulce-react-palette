import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import userActions from '../Redux/userActions';

const Menubar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  const user = useSelector(state => state.user);

  const display = user.currentUser ? (
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
        <Link className="item" href="/favorites" to="/favorites">
          <i className="heart icon" />
          Favorites
        </Link>
        <Link className="item" href="/" to="/" onClick={handleLogout}>
          <i className="user icon" />
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  ) : (
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

  return (
    <nav className="ui container">
      {display}
    </nav>
  );
};

export default Menubar;
