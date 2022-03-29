import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import UserPreviewQuestion from "./UserPreviewQuestion";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

function UserPreviewSurvey() {
  const { survey } = useSelector((store) => ({ survey: store.survey }));
  const { caption, title, questions } = survey;

  return (
    <div>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <div className="background-color-light">
              <h3 className="text-center">{title}</h3>
              <h6>{caption}</h6>

              <h5>RESPONDENT NAME : </h5>

              <h5>RESPONDENT EMAIL : </h5>
              <h5></h5>
              <div></div>
              <hr className="color-primary" />

              {questions.map((q, i) => (
                <UserPreviewQuestion question={q} key={i} />
              ))}

              <FloatingLabel
                controlId="floatingTextarea2"
                label="You can leave request and suggestions here"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Button
                className="background-color-primary float-end"
                variant="dark"
                type="submit"
                size="md"
              >
                END SURVEY
              </Button>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPreviewSurvey;
