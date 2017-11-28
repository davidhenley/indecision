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
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" autoFocus ref={c => this.input = c} value={this.state.text} onChange={this.onChangeText} />
          <button className="button" disabled={!this.state.text}>Add Option</button>
        </form>
      </div>
    );
  }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired
}

export default AddOption;