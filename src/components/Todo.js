import { Button, Accordion, Card } from "react-bootstrap";

export default function Todo(props) {
  const { todo, onDelete } = props;
  const { id, timestamp, title, content, activity } = todo;
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={id}>
          {title}
        </Accordion.Toggle>
        <Button variant="danger" className="del-todo" size="sm" onClick={() => onDelete(id)}>
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
