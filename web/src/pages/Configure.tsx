import React, { useState, FormEvent, ChangeEvent } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import axios from "axios";

type cProps = {};

type cState = {
  id: string;
  group: string;
  building: string;
  room: string;
  users: string[];
  user: string;
};

class Configure extends React.Component<cProps, cState> {
  constructor(props: cProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  state: cState = {
    id: "",
    group: "",
    building: "",
    room: "",
    users: [],
    user: ""
  };

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as cState);
  }

  addUser() {
    this.setState((prevState) => ({ users: [...prevState.users, this.state.user]}));
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/light/add", {
        id: this.state.id,
        group: this.state.group,
        building: this.state.building,
        room: this.state.room,
        status: "on",
        users: this.state.users,
        dateAdded: Date.now(),
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  render(): JSX.Element {
    return (
      <div>
        <Container fluid="sm">
          <h1>setup device</h1>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="id"
                  aria-label="id"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="group"
                  aria-label="group"
                  name="group"
                  value={this.state.group}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="building"
                  aria-label="building"
                  name="building"
                  value={this.state.building}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="room"
                  aria-label="room"
                  name="room"
                  value={this.state.room}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="add user"
                  aria-label="user"
                  name="user"
                  aria-describedby="basic-addon2"
                  value={this.state.user}
                  onChange={this.handleInputChange}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={this.addUser}>
                  Add
                </Button>
              </InputGroup>
            </Row>
            <Row>
              <b>Users:</b>
              <ul>
                {this.state.users.map((user, index) => (
                  <li>{`${user}`}</li>
                ))}
              </ul>
            </Row>
            <Row>
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary" type="submit" value="Submit">
                  add
                </Button>
              </ButtonGroup>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default Configure;
