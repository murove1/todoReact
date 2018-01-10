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

  handleChange = () => {
    const { id, onStatusChange } = this.props;
    onStatusChange(id);
  };

  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleSubmit = event => {
    const { onEdit, id } = this.props;
    let title = this.textInput.value;
    event.preventDefault();

    onEdit(id, title);
    this.setState({ editing: false });
  };

  render() {
    const { title, completed } = this.props;
    const { editing } = this.state;
    return editing ? (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={input => (this.textInput = input)}
          defaultValue={this.props.title}
        />
        <Button className="save icon" icon="save" type="submit" />
      </form>
    ) : (
      <div className={`todo${completed ? ' completed' : ''}`}>
        <Checkbox checked={completed} onChange={this.handleChange} />
        <span className="todo-title">{title}</span>
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
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Todo;
