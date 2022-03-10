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
import logoDanket from "../danketlow.png";

function NavigationBar() {
  return (
    <div>
      {/* navbar-start */}
      <Navbar expand="lg" className="navbar-bg">
        <Container>
          <Navbar.Brand href="/home">
            <Image src={logoDanket} alt="some pic" width={"30px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">AnaSayfa</Nav.Link>

              <NavDropdown title="Anketlerim" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Anket-1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Sercan</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navbar-end */}
    </div>
  );
}

export default NavigationBar;
