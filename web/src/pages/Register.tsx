import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function Register() {
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
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl placeholder="password" aria-label="password" />
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
            <Button variant="primary">register</Button>
            <Button variant="secondary" href="/login">login</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
