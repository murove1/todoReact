import { connect } from 'react-redux';

import List from '../components/List';
import { editTodo, completeTodo, deleteTodo } from '../actions';
import { getFilteredTodos } from '../reducers';

function mapStateToProps(state) {
  return {
    todos: getFilteredTodos(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEdit: (id, text) => dispatch(editTodo(id, text)),
    onComplete: id => dispatch(completeTodo(id)),
    onDelete: id => dispatch(deleteTodo(id))
  };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
