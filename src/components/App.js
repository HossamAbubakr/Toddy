// -----> REFACTORING STEPS <----- \\

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Todos from "./Todos";
import NavBar from "./NavBar";
import AddTodo from "./AddTodo";
import TodoDetails from "./TodoDetails";
import NotFound from "./NotFound";
import { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialTodos } from "../actions/todos";

class App extends Component {
  state = {
    ready: false,
  };
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(handleInitialTodos());
    this.setState({ ready: true });
  }
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
              {/* [1] Create new route with a colon then the param you want, in my case I chose todoID.*/}
              <Route path="/todos/:todoID">
                <TodoDetails />
              </Route>
              {/* [2] Create new route for not found todos.*/}
              <Route path="/not-found">
                <NotFound />
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

export default connect()(App);
