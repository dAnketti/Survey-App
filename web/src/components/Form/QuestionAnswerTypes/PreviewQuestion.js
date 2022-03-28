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
  QUESTION_MULTIPLE_RESPONSE,
} from "../../../shared/Constants";

const PreviewQuestion = (props) => {
  const { question, key:tempKey } = props;
  const { questionBody, chooseQuestionType, answers, place } = question;

  const dispatch = useDispatch();

  const deleteClickQuestionByOrderInSurvey = (event) => {
    dispatch(deleteQuestionByOrderInSurvey(place));
  };

  const replaceUp = () => {
    dispatch(replaceSequenceNumberWithAHigherSequenceNumber(place, "up"));
  };
  const replaceDown = () => {
    dispatch(replaceSequenceNumberWithAHigherSequenceNumber(place, "down"));
  };

  const updateClickQuestion = () => {
    dispatch(newQuestionAction(question));
  };
  return (
    <div key={tempKey}>
      <div className="row d-flex ">
        <div className="col d-flex">
          <h4 className="float-left">{`Soru : ${place}`} </h4>
        </div>
        <div className="col d-flex float-right">
          <span
            className="material-icons float-right"
            style={{ cursor: "pointer" }}
            onClick={deleteClickQuestionByOrderInSurvey}
          >
            delete
          </span>
          <span
            className="material-icons float-right"
            style={{ cursor: "pointer" }}
            onClick={replaceUp}
          >
            arrow_drop_up{" "}
          </span>
          <span
            className="material-icons float-right"
            style={{ cursor: "pointer" }}
            onClick={replaceDown}
          >
            arrow_drop_down{" "}
          </span>
          <span          
            className="material-icons"
            style={{ cursor: "pointer" }}
            onClick={updateClickQuestion}
          >
            edit
          </span>
        </div>
      </div>
      <label>{questionBody}</label>
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
                      <input  key={index}
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
                  ) 
                  :chooseQuestionType === QUESTION_MULTIPLE_RESPONSE ? (
                    <div key={index} className="form-check">
                      <input  key={index}
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
                  ) 
                  : (
                    chooseQuestionType === QUESTION_LINEER && (
                      <li key={index} value={key}>
                        <input  key={index}
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
    </div>
  );
};

export default PreviewQuestion;
