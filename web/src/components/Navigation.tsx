import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Redirect } from "react-router";


function Navigation() {
  function handleLogin() {
    if (sessionStorage.getItem('id'))
    {
      sessionStorage.removeItem('id')
    }
   
  }

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
            <Nav.Link href="/login" onClick={handleLogin}>{sessionStorage.getItem('id') ? "logout" : "login"}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
