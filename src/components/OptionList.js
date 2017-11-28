import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

const OptionList = (props) => (
  <div>
    <button
      className="button button--link"
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    {!props.options.length && <div>Please add an option to get started!</div>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

OptionList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default OptionList;