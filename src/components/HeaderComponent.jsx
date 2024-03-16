import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link} from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          {" "}
          EMS
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/features"}>
            Features
          </Nav.Link>
          <Nav.Link as={Link} to={"/pricing"}>
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
