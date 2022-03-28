import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Dropdown } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswers } from "../../../redux/surveyActions";
const LineerScaleAnswer = (props) => {
  let { answers: tempAnswers, place } = useSelector((store) => ({
    answers: store.question.answers,
    place: store.question.place,
  }));

  const [answersState,setAnswersState]=useState(tempAnswers);
  const [maxValue, setMaxValue] = useState(
    tempAnswers.length > 0 ? tempAnswers.length : 5
  );
  const dispatch = useDispatch();

  const onChangeAnswer = (event) => {
    const { name, value } = event.target;
    let answers = tempAnswers.filter((ans, i) => {
      const { answerOrder } = ans;
      return parseInt(name) !== parseInt(answerOrder);
    });
    answers = [...answers, { answerOrder: name, answer: value }];  
    setAnswersState(answers.sort((a, b) => a.answerOrder - b.answerOrder));
  };

  useEffect(()=>{
    dispatch(
      updateAnswers(answersState.sort((a, b) => a.answerOrder - b.answerOrder))
    );
  },[answersState]);

  useEffect(()=>{
    let answers = tempAnswers.filter((ans, i) => {
      const { answerOrder } = ans;
      return parseInt(answerOrder) <= maxValue ;
     
    });

    answers = [...answers];

    dispatch(
      updateAnswers(answers.sort((a, b) => a.answerOrder - b.answerOrder))
    );
  },[maxValue]);

  const lastAnswerOrderCount=(tempAnswers.length>0 && tempAnswers[tempAnswers.length-1].answerOrder>=maxValue*1) ? tempAnswers[tempAnswers.length-1].answerOrder*1 : maxValue*1;
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
         
          <span>
            <Stack direction="horizontal" gap={3}>
              <p>Max Value </p>        

              <Dropdown>
                <Dropdown.Toggle variant="dark background-color-primary">
                  {maxValue || "En Büyük"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {[...Array(9)].map((x, i) => {
                    return (
                      <Dropdown.Item
                        eventKey={i + 2}
                        onClick={(event) => {
                          setMaxValue(parseInt(event.target.innerHTML));
                        }}
                      >
                        {i + 2}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Stack>
          </span>
        </div>
       
      </div>

      <ul class="list-group">
    
        {
          [...Array(lastAnswerOrderCount)].map(
            (x, j) => {
              const o = j+1;  
              console.log(o);
              const key=tempAnswers[j] ? tempAnswers[j].answerOrder : o ;           
              return (           
                  <li class="list-group-item" key={key}>
                    <div className="row" key={key}>
                      <div className="col col-1">
                        <span>{key})</span>
                      </div>
                      <div className="col col-8">
                        <input
                         key={key}
                          type="text"
                          name={key}
                          value={tempAnswers[j] && tempAnswers[j].answer}
                          onChange={onChangeAnswer}
                          placeholder="options description"
                        />
                      </div>
                    </div>
                  </li>
               
              );
              
            }
          )}
      </ul>
    </div>
  );
};

export default LineerScaleAnswer;
