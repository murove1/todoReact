import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let title = this.state.title;

    if (title) {
      this.props.onAdd(title);
      this.setState({ title: '' });
    }
  };

  handleChange = event => {
    let title = event.target.value;

    this.setState({ title });
  };

  render() {
    const { title } = this.state;
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Enter text for todo."
          onChange={this.handleChange}
        />
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default Form;
