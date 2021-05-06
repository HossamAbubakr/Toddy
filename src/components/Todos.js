// -----> REFACTORING STEPS <----- \\

import React from "react";
import { Accordion } from "react-bootstrap";
import Todo from "./Todo";
import { connect } from "react-redux"; // [1] import connect from react-redux

function Todos(props) {
  const { todos } = props; // [4] use the state mapped to the props normally without changing anything!
  if (todos.length === 0) {
    return <p>Nothing to see here, you can add more todos from the top</p>;
  }
  return (
    <div>
      <Accordion defaultActiveKey="1">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </Accordion>
    </div>
  );
}

// [2] create a mapStateToProps function that passes the state to the component prop
function mapStateToProps(todos) {
  return {
    todos: Object.values(todos),
  };
}
// [3] curry out component using connect passing it mapStateToProps
// so it gives us dispatch and the state in the props
export default connect(mapStateToProps)(Todos);
