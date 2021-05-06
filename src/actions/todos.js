import { getTodos, saveTodo, removeTodo } from "../utils/api";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

function addTodo(todo) {
  return {
    type: ADD_TODO,
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

export function handleInitialTodos() {
  return async (dispatch) => {
    const todos = await getTodos();
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
