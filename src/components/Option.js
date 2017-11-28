import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ count, optionText, handleDeleteOption }) => (
  <div className="option">
    <p className="option__text">{count}. {optionText}</p>
    <button
      className="button button--link"
      onClick={() => handleDeleteOption(optionText)}
    >
      Remove
    </button>
  </div>
);

Option.propTypes = {
  count: PropTypes.number.isRequired,
  optionText: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired
};

export default Option;