import { ADD_TODO, EDIT_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions';

function todoReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_TODO:
      if (state.id === action.id) {
        return { ...state, text: action.text };
      }
      return state;

    case COMPLETE_TODO:
      if (state.id === action.id) {
        return { ...state, completed: !state.completed };
      }
      return state;

    default:
      return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ];

    case EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));

    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);

      return [...state.slice(0, index), ...state.slice(index + 1)];

    case COMPLETE_TODO:
      return state.map(todo => todoReducer(todo, action));

    default:
      return state;
  }
}

export function getFilteredTodos(state, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return state;

    case 'SHOW_COMPLETED':
      return state.filter(todo => todo.completed);

    case 'SHOW_UNCOMPLETED':
      return state.filter(todo => !todo.completed);
      
    default:
      return state;
  }
}
