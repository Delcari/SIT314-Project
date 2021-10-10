import React, { ChangeEvent, FormEvent } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

type Lstate = {
  username: string;
  password: string;
  alertVariant: "" | "success" | "danger";
  alertMessage: string;
  redirect: boolean;
};
type Lprops = {};

class Login extends React.Component<Lprops, Lstate> {
  constructor(props: Lprops) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state: Lstate = {
    username: "",
    password: "",
    alertVariant: "",
    alertMessage: "",
  };

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Lstate);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/user/auth", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        if (!response.data.username)
          this.setState({
            alertMessage: "login unsuccessful: incorrect username/password",
            alertVariant: "danger",
          });
        else {
          sessionStorage.setItem("id", response.data._id);
          this.setState({
            redirect: true,
          });
        }
      });
  }

  render(): JSX.Element {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <Container fluid="sm">
          <h1>login</h1>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="username"
                  aria-label="username"
                  name="username"
                  aria-describedby="basic-addon1"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="password"
                  aria-label="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Row>
            <Row>
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary" type="submit" value="Submit">
                  login
                </Button>
                <Button variant="secondary" href="/register">
                  register
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

export default Login;
