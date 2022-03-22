import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import danketImg from '../assets/danket.png';
function Home(props) {
  return (
    <div className="color-light">     
      <Container className="text-center ">
        <Row>
          <Col md={5}>
            <a href="/form">
              <Image src={danketImg} alt="some pic" width={"300px"} />
            </a>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <a href="">
              <Image src={danketImg} alt="some pic" width={"300px"} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
