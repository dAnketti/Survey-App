import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswers } from "../../../redux/surveyActions";
function MultipleChoice(props) {
  let { answers: tempAnswers } = useSelector((store) => ({
    answers: store.question.answers,
  }));
  const [answer, setAnswer] = useState();
  const dispatch = useDispatch();

  //State de tanımlı listemize input daki değeri ekliyor.

  const addAnswer = (key) => {
    let count = 1;
    tempAnswers &&
      tempAnswers.map((k, i) => {
        const { answerOrder } = k;
        count = parseInt(answerOrder) + 1;
      });
    tempAnswers = [...tempAnswers, { answerOrder: count, answer }];

    dispatch(updateAnswers(tempAnswers));
    setAnswer("");
  };
  //input'daki değişiklikleri dinleyip answer değişkenini güncelliyor.
  const answerChangeListener = (event) => {
    setAnswer(event.target.value);
  };

  const deleteAnswerToArray = (event) => {
    const index = event.target.value;

    let array = tempAnswers.filter(
      (value, i) => parseInt(index) !== parseInt(value.answerOrder)
    );

    dispatch(updateAnswers(array));
  };

  return (
    <div>
      {tempAnswers &&
        tempAnswers.map((arr, index) => {
          const { answer: ans, answerOrder: key } = arr;
          return (
            <div className="row">
              <div className="col col-md-11">
                <input type="radio" key={index} id={index} placeholder={ans} />
                {ans}
              </div>
              <div className="col col-md-1">
                <button
                  className="btn-sm btn-danger ms-2"
                  value={key}
                  onClick={deleteAnswerToArray}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}

      <div className="row">
        <label className="col-form-label">Add Choices</label>
        <div className="col col-md-11">
          <input
            className="form-control"
            type="text"
            placeholder="Answer Area"
            value={answer}
            onChange={answerChangeListener}
          />
        </div>
        <div className="col col-md-1">
          {" "}
          <button
            className="btn btn-sm background-color-primary ms-2  "
            onClick={addAnswer}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultipleChoice;
