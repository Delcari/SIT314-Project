import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">iot lights</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">dashboard</Nav.Link>
            <Nav.Link href="/configure">configure</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
