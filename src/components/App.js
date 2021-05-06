// -----> REFACTORING STEPS <----- \\

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Todos from "./Todos";
import NavBar from "./NavBar";
import AddTodo from "./AddTodo";
import { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux"; // [1] import connect from react-redux
import { handleInitialTodos } from "../actions/todos"; // [2] import the receive todos action

// [3] we no longer need a state for the todos as it will be handled by redux
class App extends Component {
  state = {
    /*todos: [],*/
    ready: false,
  };

  async componentDidMount() {
    // [4] we no longer need to talk to the API as its handled by thunk
    // and can directly dispatch the initialTodos action
    /*const todosObj = await getTodos();
    const todos = Object.values(todosObj);*/

    const { dispatch } = this.props;
    await dispatch(handleInitialTodos());
    this.setState({ ready: true });
  }

  // [5] we no longer need a function to add todos to the state
  // because redux allows us to add todos from the state where that action happens

  /*handleAddTodo = async (title, content) => {
    const todo = await saveTodo(title, content);
    const todos = this.state.todos.concat(todo);
    this.setState({ todos });
  };*/

  // [6] we no longer need a function to remove todos from the state
  // because redux allows us to remove todos from the state where that action happens

  /*handleRemoveTodo = async (id) => {
    await deleteTodo(id);
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };*/

  // [7] remove the props from our components as they can receive the state directly from redux
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          {this.state.ready ? (
            <div className="app-container">
              <Route exact path="/">
                <Todos />
              </Route>
              <Route path="/add">
                <AddTodo />
              </Route>
            </div>
          ) : (
            <div>
              <Spinner animation="border" variant="primary" />
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }
}
// [8] curry out component using connect as it gives us dispatch in the props
export default connect()(App);
