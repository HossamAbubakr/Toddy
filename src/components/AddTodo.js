// -----> REFACTORING STEPS <----- \\

import React, { Component } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { connect } from "react-redux"; // [1] import connect from react-redux
import { handleAddTodo } from "../actions/todos"; // [2] import the add todos action

class AddTodo extends Component {
  state = {
    title: "",
    content: "",
    toast: false,
  };
  handleChange = (e) => {
    e.preventDefault();
    const element = e.target;
    this.setState({ [element.id]: element.value });
  };
  addTodo = (e) => {
    e.preventDefault();
    const { title, content } = this.state;
    const { dispatch } = this.props;
    let todoTitle = title.trim() ? title.trim() : "Untitled";
    if (!content.trim()) {
      alert("The Content Field Is Empty, Please Fill It Then Try Again.");
    } else {
      // [3] no longer need to deal with call-backs and can directly dispatch the addTodo action
      /*this.props.onAdd(todoTitle, content);*/
      dispatch(handleAddTodo(todoTitle, content));
      this.setState({ toast: true });
    }
  };
  toggleToast = () => {
    this.setState({ toast: !this.state.toast });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Clean" onChange={this.handleChange} />
            <Form.Text className="text-muted">The title of your new Todo.</Form.Text>
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" placeholder="Clean my room and tidy my books!" onChange={this.handleChange} />
            <Form.Text className="text-muted">The content of your new Todo.</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.addTodo}>
            Add Todo
          </Button>
        </Form>
        <Toast show={this.state.toast} onClose={this.toggleToast}>
          <Toast.Header>
            <strong className="mr-auto">Todo Added</strong>
          </Toast.Header>
          <Toast.Body>Your Todo Was Added!</Toast.Body>
        </Toast>
      </div>
    );
  }
}
// [4] curry out component using connect as it gives us dispatch in the props
export default connect()(AddTodo);
