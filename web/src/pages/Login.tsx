import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function Login() {
  return (
    <div>
      <Container fluid="sm">
        <h1>login</h1>
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="username"
              aria-label="username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl placeholder="password" aria-label="password" />
          </InputGroup>
        </Row>
        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">login</Button>
            <Button variant="secondary" href="/register">register</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
