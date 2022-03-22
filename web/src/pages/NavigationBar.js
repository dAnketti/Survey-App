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
import logoImg from '../assets/logo.png'
import { BsFillPersonFill } from "react-icons/bs";

function NavigationBar() {
  return (
    <div>
      {/* navbar-start */}
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="background-color-mid color-light"
      >
        <Container>
          <Navbar.Brand href="/home">
            <Image src={logoImg} alt="some pic" width={"150px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">AnaSayfa</Nav.Link>

              <Nav.Link href="/preview">Surveys</Nav.Link>

              <NavDropdown title="Admin Yetkileri" id="basic-nav-dropdown">
                <NavDropdown.Item className="color-dark" href="#action/3.1">
                  Şube Aç
                </NavDropdown.Item>
                <NavDropdown.Item className="color-dark" href="#action/3.2">
                  Yönetici Ekle
                </NavDropdown.Item>
                <NavDropdown.Item className="color-dark" href="#action/3.3">
                  Öğretmen Ekle
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
