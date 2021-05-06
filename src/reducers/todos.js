import { ADD_TODO, DELETE_TODO, RECEIVE_TODOS } from "../actions/todos";

export default function todos(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, [action.todo.id]: action.todo };
    case DELETE_TODO:
      const { [action.id]: value, ...newstate } = state;
      return newstate;
    case RECEIVE_TODOS:
      return { ...state, ...action.todos };
    default:
      return state;
  }
}
