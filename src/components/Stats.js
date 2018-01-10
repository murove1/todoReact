import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';

const Stats = props => {
  let total = props.todos.length;
  let completed = props.todos.filter(todo => todo.completed).length;
  let notCompleted = total - completed;

  return (
    <div className="stats">
      <div className="stats-item">
        <span>All Todo: </span>
        <span>{total}</span>
      </div>
      <div className="stats-item">
        <span>Completed: </span>
        <span>{completed}</span>
      </div>
      <div className="stats-item">
        <span>Not completed: </span>
        <span>{notCompleted}</span>
      </div>
    </div>
  );
};

Stats.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Stats;
