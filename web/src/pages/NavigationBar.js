import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useDispatch } from "react-redux";
import logoImg from '../assets/logo.png'
import { logoutSurvey } from "../redux/AuthAction";


function NavigationBar() {

  const dispatch=useDispatch();

  const onLogOutClickBtn=(e)=>{
    dispatch(logoutSurvey());  
  }

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
              <Nav.Link href="/home">Home Page</Nav.Link>

              <Nav.Link href="/preview">Surveys</Nav.Link>

              <NavDropdown title="Manager Tools" id="basic-nav-dropdown">
                <NavDropdown.Item className="color-dark" href="#action/3.1">
                Create Branch 
                </NavDropdown.Item>
                <NavDropdown.Item className="color-dark" href="#action/3.2">
                 Create Manager
                </NavDropdown.Item>
                <NavDropdown.Item className="color-dark" href="#action/3.3">
                 Create Teacher
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Navbar.Collapse className="justify-content-end">             
              <Navbar.Text gap={2}>
                <span className="color-light" style={{ cursor: "pointer" }} onClick={onLogOutClickBtn}>                                
                    Logout                 
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
