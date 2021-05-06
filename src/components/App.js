import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import { getTodos, saveTodo, deleteTodo } from "../utils/api";
import Todos from "./Todos";
import NavBar from "./NavBar";
import AddTodo from "./AddTodo";
import { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    todos: [],
    ready: false,
  };
  async componentDidMount() {
    const todosObj = await getTodos();
    const todos = Object.values(todosObj);
    this.setState({ todos, ready: true });
  }
  handleAddTodo = async (title, content) => {
    const todo = await saveTodo(title, content);
    const todos = this.state.todos.concat(todo);
    this.setState({ todos });
  };
  handleRemoveTodo = async (id) => {
    deleteTodo(id);
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          {this.state.ready ? (
            <div className="app-container">
              <Route exact path="/">
                <Todos todos={this.state.todos} onDelete={this.handleRemoveTodo} />
              </Route>
              <Route path="/add">
                <AddTodo onAdd={this.handleAddTodo} />
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

export default App;
