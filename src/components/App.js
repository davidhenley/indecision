import React, { Component } from 'react';

import Header from './Header';
import Action from './Action';
import OptionList from './OptionList';
import AddOption from './AddOption';
import Modal from './Modal';

class App extends Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) { }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options))
    }
  }

  handleAddOption = option => {
    if (!option) {
      return 'Please enter a valid option';
    } else if (this.state.options.includes(option)) {
      return 'Option already exists';
    }
    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = option => {
    this.setState((prevState) => ({
      options: prevState.options.filter(opt => (
        opt !== option
      ))
    }));
  }

  handlePick = () => {
    const idx = Math.floor(Math.random() * this.state.options.length);

    const choice = this.state.options[idx];

    this.setState({ selectedOption: choice });
  }

  handleClearSelectedOption = () => {
    this.setState({ selectedOption: undefined });
  }

  render() {
    const { options, selectedOption } = this.state;
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <div className="container">
          <Action
            hasOptions={!!options.length}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <OptionList
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <Modal
          selectedOption={selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

App.defaultProps = {
  options: []
}

export default App;