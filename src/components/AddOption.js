import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddOption extends Component {
  state = {
    text: '',
    error: ''
  }

  handleAddOption = e => {
    e.preventDefault();

    const trimmedText = this.state.text.trim();

    const error = this.props.handleAddOption(trimmedText);

    this.setState(() => ({
      error,
      text: ''
    }));

    this.input.focus();
  }

  onChangeText = e => {
    e.persist();

    this.setState(() => ({
      text: e.target.value,
      error: ''
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input autoFocus ref={c => this.input = c} value={this.state.text} onChange={this.onChangeText} />
          <button disabled={!this.state.text}>Add Option</button>
          <div>
            {this.state.error}
          </div>
        </form>
      </div>
    );
  }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired
}

export default AddOption;