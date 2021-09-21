import React, { ChangeEvent } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";

type Rstate = {
  username: string;
  password: string;
  cpassword: string;
};
type Rprops = {};

class Register extends React.Component<Rprops, Rstate> {
  constructor(props: Rprops) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state: Rstate = {
    username: "",
    password: "",
    cpassword: "",
  };

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Rstate);
  }

  render(): JSX.Element {
    return (
      <div>
        <Container fluid="sm">
          <h1>register</h1>
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
              <Button variant="primary">register</Button>
              <Button variant="secondary" href="/login">
                login
              </Button>
            </ButtonGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
