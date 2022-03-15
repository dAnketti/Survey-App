import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateAnswers} from '../../../redux/surveyActions';
function MultipleChoice(props) {
  let { answers: tempAnswers } = useSelector(store => ({ answers: store.question.answers }));
  const [answer, setAnswer] = useState();
  const dispatch=useDispatch();
  const [length,setLenght]=useState(0);
  //State de tanımlı listemize input daki değeri ekliyor.

  useEffect( ()=>{
    setLenght(length+1)    
  },[tempAnswers]

  )
  const addAnswer = (key) => {
    
    tempAnswers={
      ...tempAnswers,
      [length]:answer
    }

    dispatch(updateAnswers(tempAnswers));
    setAnswer("");
  };
  //input'daki değişiklikleri dinleyip answer değişkenini güncelliyor.
  const answerChangeListener = (event) => {
    setAnswer(event.target.value);
  };

  const deleteAnswerToArray = (event) => {
    
    const index = event.target.value;
    if (index !== undefined && index !== -1) {
     
      const array={
        ...tempAnswers    
      }
      delete array[index]
      dispatch(updateAnswers(array));
    }
  };

  return (
    <div>
      {tempAnswers &&
      Object.entries(tempAnswers).map(([key,ans],index)=>         
           (
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
          )
        )}

      <div className="row">
        <label className="col-form-label">Add Choices</label>
        <div className="col col-md-11">
          <input
            class="form-control"
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
