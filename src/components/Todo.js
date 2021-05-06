import { Button, Accordion, Card } from "react-bootstrap";
import { handleRemoveTodo } from "../actions/todos";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Todo(props) {
  const { todo, dispatch } = props;
  const { id, timestamp, title, content, activity } = todo;
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={id}>
          {title}
        </Accordion.Toggle>
        <Button variant="danger" className="del-todo" size="sm" onClick={() => dispatch(handleRemoveTodo(id))}>
          ×
        </Button>
        <Link to={`/todos/${id}`}>
          <Button variant="info" className="info-todo" size="sm">
            ?
          </Button>
        </Link>
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

export default connect()(Todo);
