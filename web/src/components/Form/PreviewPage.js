import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavigationBar from "../../pages/NavigationBar";
import PreviewQuestion from "./QuestionAnswerTypes/PreviewQuestion";
import logoDanket from "../../pages/danketlow.png";
import MultipleSelect from "../Login/components/MultipleSelect";
import Accordion from "react-bootstrap/Accordion";

function PreviewPage(props) {
  const { questions } = props;
  const items = { ...localStorage };
  console.log(JSON.stringify(items));
  return (
    <div>
      <NavigationBar />

      <Container className="text-center ">
        <Row>
          <Col className="background-color-primary" md={2}>
            <Accordion>
              <h4 className="mt-5">Surveys</h4>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="bg-primary" md={7}>
            <Image src={logoDanket} alt="some pic" width={"100%"} />
          </Col>
          <Col className="bg-secondary" md={3}>
            <h4 className="mt-5">Select Class To Share Survey</h4>
            <MultipleSelect />
            <h4>Please Enter Mails to Send Survey Manual</h4>
          </Col>
        </Row>
      </Container>

      {/* <PreviewQuestion /> */}
    </div>
  );
}

export default PreviewPage;
