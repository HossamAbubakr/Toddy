import React from "react";
import { Accordion } from "react-bootstrap";
import Todo from "./Todo";
export default function Todos(props) {
  const { todos } = props;
  if (todos.length === 0) {
    return <p>Nothing to see here, you can add more todos from the top</p>;
  }
  return (
    <div>
      <Accordion defaultActiveKey="1">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onDelete={props.onDelete} />
        ))}
      </Accordion>
    </div>
  );
}
