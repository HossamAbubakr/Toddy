// -----> REFACTORING STEPS <----- \\

import { getTodos, saveTodo, removeTodo } from "../utils/api"; // [1] move out data logic calls in here
// [2] create our action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
// [3] create our action creators
function addTodo(todo) {
  return {
    // [A] define the type
    type: ADD_TODO,
    // [B] define the payload
    todo,
  };
}

function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
}
// [4] create our async data calls for use with thunk
export function handleInitialTodos() {
  // [A] return a function so thunk can supply it with dispatch
  return async (dispatch) => {
    // [B] make our API call
    const todos = await getTodos();
    // [C] save the result to the state
    dispatch(receiveTodos(todos));
  };
}

export function handleAddTodo(title, content) {
  return async (dispatch) => {
    const todo = await saveTodo(title, content);
    dispatch(addTodo(todo));
  };
}

export function handleRemoveTodo(id) {
  return async (dispatch) => {
    removeTodo(id);
    dispatch(deleteTodo(id));
  };
}
