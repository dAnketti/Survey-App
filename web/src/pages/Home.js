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
import NavigationBar from "./NavigationBar";

function Home(props) {
  return (
    <div className="color-light">
      <NavigationBar />
      <Container className="text-center ">
        <Row>
          <Col md={5}>
            <a href="/form">
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
