import React from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.svg';
import './Header.css';
import Stats from './Stats';

const Header = props => {
  const { todos } = props;

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">todoReact</h1>
      </div>
      <Stats todos={todos} />
    </header>
  );
};

Header.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Header;
