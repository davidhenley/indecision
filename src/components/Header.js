import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    <h2 className="header__subtitle">{props.subtitle}</h2>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Header;