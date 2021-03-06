import { SET_FILTER } from '../actions';

export default function reducer(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
