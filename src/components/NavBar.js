import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          Toddy
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="add">
            Add Todo
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
