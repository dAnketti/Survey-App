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
import { BsFillPersonFill } from "react-icons/bs";

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
                <NavDropdown.Item href="#action/3.2">Anket-2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Anket-3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <span>
                  Signed in as:{" "}
                  <a href="#login">
                    {localStorage
                      .getItem("email")
                      .slice(0, localStorage.getItem("email").indexOf("@"))}
                  </a>
                </span>
              </Navbar.Text>
              <Navbar.Text gap={2}>
                <span>
                  {" "}
                  <a href="/">Çıkış</a>{" "}
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
