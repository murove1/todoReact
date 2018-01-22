import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    let text = this.state.text;
    const { onAdd } = this.props;

    if (text) {
      onAdd(text);
      this.setState({ text: '' });
    }
  };

  handleChange = event => {
    let text = event.target.value;

    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    const disabled = !this.state.text;

    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter text for todo."
          onChange={this.handleChange}
        />
        <Button type="submit" disabled={disabled}>
          Add
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default Form;
