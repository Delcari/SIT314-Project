import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function Configure() {
  return (
    <div>
      <Container fluid="sm">
        <h1>setup device</h1>
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="device-id"
              aria-label="device-id"
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl placeholder="access-key" aria-label="access-key" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl placeholder="group" aria-label="group" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl placeholder="building" aria-label="building" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <FormControl placeholder="room" aria-label="room" />
          </InputGroup>
        </Row>
        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">add</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
}

export default Configure;
