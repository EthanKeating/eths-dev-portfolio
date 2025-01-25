import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex justify-content-center"
    >
      <Container>
        <Navbar.Brand
          className="m-auto d-flex"
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "2.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TypeAnimation
            sequence={["ethan keating", 1000, "eths.dev", 5000]}
            wrapper="span"
            speed={25}
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "2.5rem",
              display: "inline-block",
              textAlign: "center",
            }}
            repeat={0}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
