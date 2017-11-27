import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

const OptionList = (props) => (
  <div>
    <button
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    <div>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  </div>
);

OptionList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default OptionList;