import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = props => {
  const { todos, onStatusChange, onDelete, onEdit } = props;

  return (
    <section className="todo-list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default TodoList;
