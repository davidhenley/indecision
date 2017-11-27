import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Action extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

Action.propTypes = {
  handlePick: PropTypes.func.isRequired,
  hasOptions: PropTypes.bool.isRequired
}

export default Action;