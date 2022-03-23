import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import danketImg from '../assets/danket.png';
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <div className="color-light">     
      <Container className="text-center ">
        <Row>
          <Col md={5}>
          <Link to="/preview">
              <Image src={danketImg} alt="some pic" width={"300px"} />
            </Link>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <Link to="/preview">
              <Image src={danketImg} alt="some pic" width={"300px"} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
