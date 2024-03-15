import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand> EMS</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to="/home">
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link to={"/features"}>
            <Nav.Link>Features</Nav.Link>
          </Link>
          <Link to={"/pricing"}>
            <Nav.Link>Pricing</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
