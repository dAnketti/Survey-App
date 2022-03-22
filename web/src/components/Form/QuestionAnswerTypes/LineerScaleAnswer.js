import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Dropdown } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswers } from "../../../redux/surveyActions";
import { listItemTextClasses } from "@mui/material";
const LineerScaleAnswer = (props) => {
  let { answers: tempAnswers ,order } = useSelector((store) => ({
    answers: store.question.answers,
    order: store.question.order
  }));

  
  const [minValue, setMinValue] = useState(parseInt(0));
  const [maxValue, setMaxValue] = useState(tempAnswers.length>0 ? tempAnswers.length+minValue : 5);
  const dispatch = useDispatch();
  
   const onChangeAnswer = (event) => {
    const { name, value } = event.target;

    let answers = tempAnswers.filter((ans,i)=>{
      const {answerOrder}=ans;
      return(parseInt(name)!==parseInt(answerOrder)
    )});

    answers =[...answers,{answerOrder:name,answer:value}]

    dispatch(updateAnswers(answers.sort((a,b)=>(a.answerOrder-b.answerOrder))));
  };
 
  
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
          <p>Min Value</p>
          <span>
            <Stack direction="horizontal" gap={3}>
              <p>Min / Max Value </p>
              <Dropdown>
                <Dropdown.Toggle variant="dark background-color-primary">
                  {minValue + "" || "En Küçük"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    className="background-color-primary"
                    eventKey="0"
                    onClick={(event) => {
                      setMinValue(0);

                    }}
                  >
                    0
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={(event) => {
                      setMinValue(1);
                      tempAnswers.splice(0,1);                     
                    }}
                  >
                    1
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="dark background-color-primary">
                  {maxValue || "En Büyük"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {[...Array(9)].map((x, i) => {                                                   
                    return(
                    <Dropdown.Item
                      eventKey={i + 2}
                      onClick={(event) => {
                        setMaxValue(parseInt(event.target.innerHTML));
                      }}
                    >
                      {i + 2}
                    </Dropdown.Item>
                  )})}
                </Dropdown.Menu>
              </Dropdown>
            </Stack>
          </span>
        </div>
        <div className="col col-md-4">
          <p>Max Value</p>
        </div>
      </div>
     
      
      <ul class="list-group">   
        {
            tempAnswers.length>0 &&
            tempAnswers.map((ans,i)=>{
              const {answerOrder,answer}=ans;              
              return (                                                
                <>{
                  answerOrder >=minValue &&
                  <li class="list-group-item">
                    <div className="row">
                      <div className="col col-1">
                        <span>{answerOrder})</span>
                      </div>
                      <div className="col col-8">
                        <input
                          type="text"                          
                          name={answerOrder}
                          value={answer}
                          onChange={onChangeAnswer}
                          placeholder="options description"
                        />
                      </div>
                    </div>
                  </li>
              }
                </>
              );
            }
            )
        }    
        {  ((maxValue*1+minValue*1+1)-tempAnswers.length>0) &&
           [...Array((maxValue*1+minValue*1+1)-tempAnswers.length)].map((x,j)=>{
            const o=tempAnswers.length+j;
            return (
              <>
                <li class="list-group-item">
                  <div className="row">
                    <div className="col col-1">
                      <span>{o})</span>
                    </div>
                    <div className="col col-8">
                      <input
                        type="text"                          
                        name={o}
                        value=""
                        onChange={onChangeAnswer}
                        placeholder="options description"
                      />
                    </div>
                  </div>
                </li>
              </>
            );
          })
        }        
      </ul>
    </div>
  );
};

export default LineerScaleAnswer;
