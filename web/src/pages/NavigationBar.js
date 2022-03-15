import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logoDanket from "./DANKET-logos_transparent.png";
import { BsFillPersonFill } from "react-icons/bs";

function NavigationBar() {
  return (
    <div>
      {/* navbar-start */}
      <Navbar expand="lg" className="background-color-mid color-light">
        <Container>
          <Navbar.Brand href="/home">
            <Image src={logoDanket} alt="some pic" width={"150px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="color-light" href="/home">
                AnaSayfa
              </Nav.Link>

              <NavDropdown
                className="color-light"
                title="Anketlerim"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="color-dark" href="#action/3.1">
                  Anket-1
                </NavDropdown.Item>
                <NavDropdown.Item className="color-dark" href="#action/3.2">
                  Anket-2
                </NavDropdown.Item>
                <NavDropdown.Item className="color-dark" href="#action/3.3">
                  Anket-3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <span className="color-light">
                  Signed in as: <a href="#login"></a>
                </span>
              </Navbar.Text>
              <Navbar.Text gap={2}>
                <span className="color-light">
                  {" "}
                  <a className="color-light" href="/">
                    Çıkış
                  </a>{" "}
                </span>
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      {/* navbar-end */}
    </div>
  );
}

export default NavigationBar;
