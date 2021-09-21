import React, { ChangeEvent, FormEvent } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";

type Lstate = {
  username: string;
  password: string;
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
  };

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Lstate);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("A name was submitted:" + this.state.password);
  }

  render(): JSX.Element {
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
                <Button variant="secondary" href="/register" name="username">
                  register
                </Button>
              </ButtonGroup>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;
