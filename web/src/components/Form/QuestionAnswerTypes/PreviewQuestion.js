import React from "react";
import { useDispatch } from "react-redux";
import {
  newQuestionAction,
  deleteQuestionByOrderInSurvey,
  replaceSequenceNumberWithAHigherSequenceNumber,
} from "../../../redux/surveyActions";
import {
  QUESTION_MULTIPLE,
  QUESTION_PARAGRAPH,
  QUESTION_LINEER,
} from "../../../shared/Constants";

const PreviewQuestion = (props) => {
  const { question } = props;
  const { content, chooseQuestionType, answers, orders } = question;

  const dispatch = useDispatch();

  const deleteClickQuestionByOrderInSurvey = (event) => {
    dispatch(deleteQuestionByOrderInSurvey(orders));
  };

  const replaceUp = () => {
    dispatch(replaceSequenceNumberWithAHigherSequenceNumber(orders, "up"));
  };
  const replaceDown = () => {
    dispatch(replaceSequenceNumberWithAHigherSequenceNumber(orders, "down"));
  };

  const updateClickQuestion = () => {
    console.log("update");
    dispatch(newQuestionAction(question));
  };
  return (
    <div>
      <div className="row d-flex ">
        <div className="col d-flex">
          <h4 className="float-left">{`Soru : ${orders}`} </h4>
        </div>
        <div className="col d-flex float-right">
          <span
            class="material-icons float-right"
            style={{ cursor: "pointer" }}
            onClick={deleteClickQuestionByOrderInSurvey}
          >
            delete
          </span>
          <span
            class="material-icons float-right"
            style={{ cursor: "pointer" }}
            onClick={replaceUp}
          >
            arrow_drop_up{" "}
          </span>
          <span
            class="material-icons float-right"
            style={{ cursor: "pointer" }}
            onClick={replaceDown}
          >
            arrow_drop_down{" "}
          </span>
          <span
            class="material-icons"
            style={{ cursor: "pointer" }}
            onClick={updateClickQuestion}
          >
            edit
          </span>
        </div>
      </div>
      <label>{content}</label>
      <div>
        <ol>
          {chooseQuestionType === QUESTION_PARAGRAPH ? (
            <textarea
              className="form-control"
              id="content"
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
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id={`${orders}-${key}`}
                        type="radio"
                        name={orders}
                      />
                      <label
                        className="form-check-label ms-2"
                        for={`${orders}-${key}`}
                      >
                        {answer}
                      </label>
                    </div>
                  ) : (
                    chooseQuestionType === QUESTION_LINEER && (
                      <li value={key}>
                        <input
                          className="form-check-input"
                          id={`${orders}-${key}`}
                          type="radio"
                          name={orders}
                        />
                        <label
                          className="form-check-label ms-2"
                          for={`${orders}-${key}`}
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
    </div>
  );
};

export default PreviewQuestion;
