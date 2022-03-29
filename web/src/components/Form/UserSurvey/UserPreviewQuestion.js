import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  QUESTION_MULTIPLE,
  QUESTION_PARAGRAPH,
  QUESTION_LINEER,
  QUESTION_MULTIPLE_RESPONSE,
} from "../../../shared/Constants";

function UserPreviewQuestion(props) {
  const { question } = props;
  const { questionBody, place, answers, chooseQuestionType } = question;

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="background-color-light">
              <h4> QUESTION NO: {place} </h4>
              <span>{questionBody}</span>
              <div>
                <ol>
                  {chooseQuestionType === QUESTION_PARAGRAPH ? (
                    <textarea
                      className="form-control"
                      id="questionBody"
                      rows="3"
                      placeholder="Cevap Metni kullanıcı tarafından girilecek"
                    ></textarea>
                  ) : (
                    answers &&
                    answers.map((value, index) => {
                      const { answerOrder: key, answer } = value;
                      return (
                        <>
                          {chooseQuestionType === QUESTION_MULTIPLE ? (
                            <div key={index} className="form-check">
                              <input
                                key={index}
                                className="form-check-input"
                                id={`${place}-${key}`}
                                type="radio"
                                name={place}
                              />
                              <label
                                key={index}
                                className="form-check-label ms-2"
                                htmlFor={`${place}-${key}`}
                              >
                                {answer}
                              </label>
                            </div>
                          ) : chooseQuestionType ===
                            QUESTION_MULTIPLE_RESPONSE ? (
                            <div key={index} className="form-check">
                              <input
                                key={index}
                                className="form-check-input"
                                id={`${place}-${key}`}
                                type="checkbox"
                                name={place}
                              />
                              <label
                                key={index}
                                className="form-check-label ms-2"
                                htmlFor={`${place}-${key}`}
                              >
                                {answer}
                              </label>
                            </div>
                          ) : (
                            chooseQuestionType === QUESTION_LINEER && (
                              <li key={index} value={key}>
                                <input
                                  key={index}
                                  className="form-check-input"
                                  id={`${place}-${key}`}
                                  type="radio"
                                  name={place}
                                />
                                <label
                                  key={index}
                                  className="form-check-label ms-2"
                                  htmlFor={`${place}-${key}`}
                                >
                                  {answer}
                                </label>
                              </li>
                            )
                          )}{" "}
                        </>
                      );
                    })
                  )}
                </ol>
              </div>
              <hr className="color-primary" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPreviewQuestion;
