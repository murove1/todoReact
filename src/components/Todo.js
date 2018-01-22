import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Todo.css';
import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = () => {
    const { id, onComplete } = this.props;
    onComplete(id);
  };

  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  handleSubmit = event => {
    const { onEdit, id } = this.props;
    let text = this.textInput.value;
    event.preventDefault();

    if (text) {
      onEdit(id, text);
    }

    this.setState({ editing: false });
  };

  render() {
    const { text, completed } = this.props;
    const { editing } = this.state;
    return editing ? (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={input => (this.textInput = input)}
          defaultValue={this.props.text}
        />
        <Button className="save icon" icon="save" type="submit" />
      </form>
    ) : (
      <div className={`todo${completed ? ' completed' : ''}`}>
        <Checkbox checked={completed} onChange={this.handleComplete} />
        <span className="todo-title">{text}</span>
        <Button className="edit icon" icon="edit" onClick={this.handleEdit} />
        <Button
          className="delete icon"
          icon="delete"
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Todo;
