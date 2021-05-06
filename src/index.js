// -----> REFACTORING STEPS <----- \\

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux"; // [1] import createStore from redux
import { Provider } from "react-redux"; // [2] import provider from react-redux
import todos from "./reducers/todos"; // [3] import our reducers
import middleware from "./middleware"; // [4] import our middleware

const store = createStore(todos, middleware); // [5] create the store
// [6] wrap our app in a provider and pass it the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
