import React from 'react';
import PropTypes from 'prop-types';

import './Filter.css';
import FilterLink from './FilterLink';

const Filter = props => {
  return (
    <div className="todo-filter">
      <FilterLink
        icon="list"
        active={props.activeFilter === 'SHOW_ALL'}
        onClick={() => props.onSetFilter('SHOW_ALL')}
      />
      <FilterLink
        icon="check_box"
        active={props.activeFilter === 'SHOW_COMPLETED'}
        onClick={() => props.onSetFilter('SHOW_COMPLETED')}
      />
      <FilterLink
        icon="check_box_outline_blank"
        active={props.activeFilter === 'SHOW_UNCOMPLETED'}
        onClick={() => props.onSetFilter('SHOW_UNCOMPLETED')}
      />
    </div>
  );
};

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onSetFilter: PropTypes.func.isRequired
};

export default Filter;
