import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => {
  const { className, icon, children, onClick } = props;

  return (
    <button className={className} onClick={onClick} {...props}>
      {icon ? <i className="material-icons">{icon}</i> : children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
