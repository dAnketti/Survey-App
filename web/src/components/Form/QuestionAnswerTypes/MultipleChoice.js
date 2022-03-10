import React, { useEffect, useState } from "react";

function MultipleChoice(props) {
  const { answerCallbackHandler } = props;
  const [answers, setAnswers] = useState([]);

  const [answer, setAnswer] = useState();
  useEffect(() => {
    answerCallbackHandler(answers);
  }, [answers]);
  //State de tanımlı listemize input daki değeri ekliyor.
  const addAnswer = () => {
    answer && setAnswers((oldAnswers) => [...oldAnswers, answer]);
    setAnswer("");
  };
  //input'daki değişiklikleri dinleyip answer değişkenini güncelliyor.
  const answerChangeListener = (event) => {
    setAnswer(event.target.value);
  };

  const deleteAnswerToArray = (event) => {
    const array = [...answers];
    const index = event.target.value;
    if (index !== undefined && index !== -1) {
      array.splice(index, 1);
      setAnswers(array);
    }
  };

  return (
    <div>
      <div className="row ">
        <div className="col-sm-10">
          {answers &&
            answers.map((ans, index) => {
              return (
                <div className="list-group">
                  <li className="list-group-item">
                    <button
                      className="btn btn-sm btn-danger ms-5"
                      value={index}
                      onClick={deleteAnswerToArray}
                    >
                      &times;
                    </button>
                    <input
                      type="radio"
                      key={index}
                      id={index}
                      placeholder={ans}
                    />
                    {ans}
                  </li>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row">
        <label className="col-form-label">Add Choices</label>
        <div className="input-group mb-3">
          <input
            class="form-control"
            type="text"
            placeholder="Answer Area"
            value={answer}
            onChange={answerChangeListener}
          />
          <button className="btn btn-primary ms-2 " onClick={addAnswer}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultipleChoice;
