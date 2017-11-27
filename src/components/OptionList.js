import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

class OptionList extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleDeleteOptions}
        >
          Remove All
        </button>
        <div>
          {this.props.options.map(option => (
            <Option
              key={option}
              optionText={option}
              handleDeleteOption={this.props.handleDeleteOption}
            />
          ))}
        </div>
      </div>
    );
  }
}

OptionList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default OptionList;