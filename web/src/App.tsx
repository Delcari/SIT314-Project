import React, { useState } from "react";
import logo from "./logo.svg";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
  Navbar, 
  Nav
} from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{marginBottom:"30px"}}>
  <Navbar bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">iot lights</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">dashboard</Nav.Link>
    <Nav.Link href="#features">configure</Nav.Link>
    <Nav.Link href="#pricing">about</Nav.Link>
  </Nav>
  <Nav>
      <Nav.Link href="#deets">login</Nav.Link>
    </Nav>
  </Container>
</Navbar>
          </div>
    <Container fluid="sm">
          <h1>login</h1>
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="username"
            aria-label="username"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="password"
            aria-label="password"
            />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="confirm password"
            aria-label="confirm password"
            />
        </InputGroup>
      </Row>
      <Row>
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">login</Button>
          <Button variant="secondary">register</Button>
        </ButtonGroup>
      </Row>
    </Container>
            </div>
  );
}

export default App;
