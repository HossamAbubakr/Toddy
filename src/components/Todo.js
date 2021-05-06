// -----> REFACTORING STEPS <----- \\

import { Button, Accordion, Card } from "react-bootstrap";
import { handleRemoveTodo } from "../actions/todos"; // [1] import the remove todos action
import { connect } from "react-redux"; // [2] import connect from react-redux

function Todo(props) {
  // [3] no longer need to deal with call-backs;
  const { todo /*, onDelete*/, dispatch } = props;
  const { id, timestamp, title, content, activity } = todo;
  // [4] we can now directly dispatch the removeTodo action
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={id}>
          {title}
        </Accordion.Toggle>
        <Button variant="danger" className="del-todo" size="sm" onClick={() => dispatch(handleRemoveTodo(id))}>
          ×
        </Button>
      </Card.Header>
      <Accordion.Collapse eventKey={id}>
        <Card.Body>
          <p className="timeStamp">{timestamp}</p>
          {content}
          <p className="suggestion">
            <span>Random Activity Suggestion:</span> {activity}
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
// [5] curry out component using connect as it gives us dispatch in the props
export default connect()(Todo);
