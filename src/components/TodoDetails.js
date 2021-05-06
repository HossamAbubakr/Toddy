// -----> REFACTORING STEPS <----- \\

// [1] Create a TodoDetails component to render a full view of the todo using its url params

import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom"; // [2] Import withRouter, Redirect

function TodoDetails(props) {
  if (props.notFound) {
    // [7] If notFound is true, meaning the id is invalid, redirect to the 404 page.
    return <Redirect to="/not-found" />;
  }
  const { todo } = props;
  const { timestamp, title, content, activity } = todo;
  return (
    <Card className="text-center">
      <Card.Header>
        {/* [8] Implement going back through the history API provided by with router to the props */}
        <Button variant="dark" className="back-todo" size="sm" onClick={() => props.history.goBack()}>
          ❮
        </Button>
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Title>{content}</Card.Title>
        <Card.Text>Random Activity Suggestion: {activity}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{timestamp}</Card.Footer>
    </Card>
  );
}
function mapStateToProps(todos, { match }) {
  const id = match.params.todoID; // [4] Get your param from the match API provided by withRouter giving us access to our named Param (todoID)
  const todo = todos[id]; // [5] Get the todo from the state object using the param;
  const notFound = todo === undefined; // [6] If the todo is undefined it means the id is invalid thus set notFOund to true;
  return {
    todo,
    notFound,
  };
}

export default withRouter(connect(mapStateToProps)(TodoDetails)); // [3] Pass your connect with its params to withRouter
