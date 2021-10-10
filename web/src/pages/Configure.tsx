import React, { useState, FormEvent, ChangeEvent } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
  Alert 
} from "react-bootstrap";
import axios from "axios";

const apiPort = import.meta.env.VITE_API_PORT;
const api = import.meta.env.VITE_API;
const mqttApi = import.meta.env.VITE_MQTT_API;
const mqttApiPort = import.meta.env.VITE_MQTT_API_PORT;

type cProps = {};

type cState = {
  id: string;
  name: string;
  building: string;
  room: string;
  users: string[];
  user: string;
  alertVariant: "" | "success" | "danger";
  alertMessage: string;
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
    name: "",
    building: "",
    room: "",
    users: [sessionStorage.getItem("id") ?? ""],
    user: "",
    alertVariant: "",
    alertMessage: "",
  };

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as cState);
  }

  addUser() {
    this.setState((prevState) => ({
      users: [...prevState.users, this.state.user],
    }));
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(`http://${api}:${apiPort}/light/update/${this.state.id}`, {
        id: this.state.id,
        name: this.state.name,
        building: this.state.building,
        room: this.state.room,
        status: "unknown",
        users: this.state.users,
        dateAdded: Date().toString(),
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          alertMessage: `Light: ${this.state.id}, successfully added!`,
          alertVariant: "success",
        })
      });
    axios
      .get(`http://${mqttApi}:${mqttApiPort}/light/update/${this.state.id}`, {})
      .then((response) => {});
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
                  placeholder="name"
                  aria-label="name"
                  name="name"
                  value={this.state.name}
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
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={this.addUser}
                >
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
              <Alert variant={this.state.alertVariant}>
                <Alert.Heading>{this.state.alertMessage}</Alert.Heading>
              </Alert>
          </form>
        </Container>
      </div>
    );
  }
}

export default Configure;
