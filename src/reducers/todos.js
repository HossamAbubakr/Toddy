// -----> REFACTORING STEPS <----- \\

// [1] import our action types.
import { ADD_TODO, DELETE_TODO, RECEIVE_TODOS } from "../actions/todos";

// [2] based on the action type return the state accordingly.
export default function todos(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      // [A] spread all existing todos then add a new todo object with this format todoKey: id, todoValue: todo
      return { ...state, [action.todo.id]: action.todo };
    case DELETE_TODO:
      // [B] destructring a specific element at the start then spreading the rest allows us to return an object WITHOUT that element thus removing it.
      const { [action.id]: value, ...newstate } = state;
      return newstate;
    case RECEIVE_TODOS:
      // [C] spread all existing todos then spread all the todos from the action.
      return { ...state, ...action.todos };
    default:
      // [D] otherwise return the state as is.
      return state;
  }
}
