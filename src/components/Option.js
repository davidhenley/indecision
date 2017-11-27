import React from 'react';
import PropTypes from 'prop-types';

const Option = props => (
  <div>
    {props.optionText}
    <button onClick={() => props.handleDeleteOption(props.optionText)}>
      Remove
    </button>
  </div>
);

Option.propTypes = {
  optionText: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired
};

export default Option;