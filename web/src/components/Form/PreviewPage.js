import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MultipleSelect from "../MultipleSelect";
import Accordion from "react-bootstrap/Accordion";


import Form from "./QuestionAnswerTypes/Form";

function PreviewPage(props) {

  return (
    <div>
      <Container className="text-left ">
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
          <Col className="bg-mid" md={7}>
            <Form />
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
