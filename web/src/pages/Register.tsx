import React, { ChangeEvent, FormEvent } from "react";
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

type Rstate = {
  username: string;
  password: string;
  cpassword: string;
  alertVariant: "" | "success" | "danger";
  alertMessage: string;
};
type Rprops = {};

class Register extends React.Component<Rprops, Rstate> {
  constructor(props: Rprops) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state: Rstate = {
    username: "",
    password: "",
    cpassword: "",
    alertMessage: "",
    alertVariant: ""
  };

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this
    .setState({ [name]: value } as Rstate);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/user/add", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        if (!response.data.username)
          this.setState({
            alertMessage: "registration unsuccessful",
            alertVariant: "danger",
          });
        else
        this.setState({
          alertMessage: "registration successful",
          alertVariant: "success",
        });
      });
  }


  render(): JSX.Element {
    return (
      <div>
        <Container fluid="sm">
          <h1>register</h1>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="username"
                aria-label="username"
                aria-describedby="basic-addon1"
                name="username"
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
            <InputGroup className="mb-3">
              <FormControl
                placeholder="confirm password"
                aria-label="confirm password"
                name="cpassword"
                value={this.state.cpassword}
                onChange={this.handleInputChange}
              />
            </InputGroup>
          </Row>
          <Row>
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" type="submit" value="Submit">register</Button>
              <Button variant="secondary" href="/login">
                login
              </Button>
            </ButtonGroup>
            <Alert variant={this.state.alertVariant}>
                <Alert.Heading>{this.state.alertMessage}</Alert.Heading>
              </Alert>
          </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default Register;
