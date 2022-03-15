import { Dropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {newQuestionAction,addQuestionToTheSurvey, clearQuestionAction} from '../../../redux/surveyActions';
import {
  QUESTION_MULTIPLE,
  QUESTION_LINEER,
  QUESTION_PARAGRAPH,
} from "../../../shared/Constants";
import LineerScaleAnswer from "./LineerScaleAnswer";
import MultipleChoice from "./MultipleChoice";



const NewQuestion = (props) => {
  let { question: tempQuestion } = useSelector(store => ({ question: store.question }));
  const [content,setContent]=useState(tempQuestion.content);
  const [chooseQuestionType,setChooseQuestionType]=useState(tempQuestion.chooseQuestionType);

  const dispatch=useDispatch();
       
  useEffect( ()=>{
    dispatch(newQuestionAction(      
      {
        ...tempQuestion, 
        content
      }
    ))
  },[content]);

  useEffect( ()=>{
    dispatch(newQuestionAction(      
      {
        ...tempQuestion, 
        chooseQuestionType
      }
    ))
  },[chooseQuestionType])


  const onSaveBtnClick = (event) => {
    if(content){      
      dispatch(addQuestionToTheSurvey(tempQuestion))
      dispatch(clearQuestionAction())
      setContent("");
    }
  };

  

  return (
    <div className="container border border-dark">
      <div className="form-group row ">
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
            value={content}
            onChange={(event) => {
              setContent(event.target.value)
            }}
          ></textarea>
        </div>
        <div className="form-group row">
          <label for="content" class="col-sm-2 col-form-label">
            {" "}
          </label>
          <div className="col-md-11">
            <div class="btn-group mb-3 color-primary " role="group">
              <Dropdown>
                <Dropdown.Toggle className="background-color-primary ">
                  Select question type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(event) =>
                      setChooseQuestionType(QUESTION_MULTIPLE)
                    }
                  >
                    Multiple Choice
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(event) =>
                      setChooseQuestionType(QUESTION_LINEER)
                    }
                  >
                    Lineer Scale Answer
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(event) =>
                      setChooseQuestionType(QUESTION_PARAGRAPH)
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

      {chooseQuestionType === QUESTION_MULTIPLE ? (
        <MultipleChoice    />
      ) : chooseQuestionType === QUESTION_LINEER ? (
        <LineerScaleAnswer   />
      ) : (
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="content"
            rows="1"
            disabled="true"
            placeholder="Answer will create by user "
          ></textarea>
        </div>
      )}

      <div className="form-group row">
        <div className="d-grid mt-2 gap-2">
          <button
            variant="dark"
            type="submit"
            size="md"
            className="btn background-color-primary color-light"
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
