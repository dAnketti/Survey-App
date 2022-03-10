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

function Home() {
  return (
    <div>
      {/* navbar-start */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" img="">
            Danket
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Ana Sayfa</Nav.Link>

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
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navbar-end */}

      <Container className="text-center">
        <Row>
          <Col md={5}>
            <a href="">
              <Image src={logoDanket} alt="some pic" width={"300px"} />
            </a>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <a href="">
              <Image src={logoDanket} alt="some pic" width={"300px"} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
