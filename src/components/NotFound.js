// -----> REFACTORING STEPS <----- \\

// [1] Create a 404 component to render in the not-found route.
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h3>Ops...This Todo Doesn't Exist</h3>
      <div className="not-found">
        <img alt="404" src="/404.gif" />
      </div>
      <Link to="/">
        <Button variant="outline-dark" size="lg">
          Take Me Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
