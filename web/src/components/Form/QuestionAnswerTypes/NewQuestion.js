import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import {
  QUESTION_MULTIPLE,
  QUESTION_LINEER,
  QUESTION_PARAGRAPH,
} from "../../../shared/Constants";
import LineerScaleAnswer from "./LineerScaleAnswer";
import MultipleChoice from "./MultipleChoice";

const NewQuestion = (props) => {
  const { callbackHandlerAllQuestions } = props;
  const [question, setQuestion] = useState({
    content: "",
    answers: [],
    choseQuestionType: QUESTION_MULTIPLE,
  });

  const answerCallbackHandler = (answers) => {
    setQuestion({
      ...question,
      answers: answers,
    });
  };

  const onSaveBtnClick = (event) => {
    callbackHandlerAllQuestions(question);

    setQuestion({
      content: "",
      answers: [],
      choseQuestionType: QUESTION_MULTIPLE,
    });
  };

  const { choseQuestionType, content, answers } = question;

  return (
    <div className="container">
      <div className="form-group row">
        <label for="content" class="col-sm-2 col-form-label">
          {" "}
        </label>
        <div className="col-form-label">
          <textarea
            className="form-control col-mb-5"
            id="content"
            rows="3"
            value={content}
            placeholder="Please enter yout question here"
            onChange={(event) => {
              setQuestion({ ...question, content: event.target.value });
            }}
          ></textarea>
        </div>
        <div className="form-group row">
          <label for="content" class="col-sm-2 col-form-label">
            {" "}
          </label>
          <div className="col-md-11">
            <div class="btn-group" role="group">
              <Dropdown>
                <Dropdown.Toggle>Select question type</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(event) =>
                      setQuestion({
                        ...question,
                        choseQuestionType: QUESTION_MULTIPLE,
                      })
                    }
                  >
                    Multiple Choice
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(event) =>
                      setQuestion({
                        ...question,
                        choseQuestionType: QUESTION_LINEER,
                      })
                    }
                  >
                    Lineer Scale Answer
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(event) =>
                      setQuestion({
                        ...question,
                        choseQuestionType: QUESTION_PARAGRAPH,
                      })
                    }
                  >
                    Paragraph
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      {choseQuestionType === QUESTION_MULTIPLE ? (
        <MultipleChoice
          isEmpty={answers}
          answerCallbackHandler={answerCallbackHandler}
        />
      ) : choseQuestionType === QUESTION_LINEER ? (
        <LineerScaleAnswer
          isEmpty={answers}
          answerCallbackHandler={answerCallbackHandler}
        />
      ) : (
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="content"
            rows="3"
            disabled="true"
            placeholder="Answer will create by user "
          ></textarea>
        </div>
      )}

      <div className="form-group row">
        <div className="d-grid mt-2 gap-2">
          <button
            variant="secondary"
            type="submit"
            size="md"
            className="btn btn-primary"
            onClick={onSaveBtnClick}
          >
            SAVE QUESTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
