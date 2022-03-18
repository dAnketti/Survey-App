import React from "react";
import PreviewQuestion from "./PreviewQuestion";
import {  useSelector } from "react-redux";
import NewQuestion from "./NewQuestion";

const AllQuestionsPreview = (props) => {
  const {nextStep}=props;
  const { survey: tempSurvey } = useSelector((store) => ({
    survey: store.survey,
  }));

  return (
    <div
      id="question-area"
      className="mt-5 background-color-light color-dark border border-dark "
    >
      <h1>Survey Preview</h1>
      {tempSurvey.questions &&
        tempSurvey.questions.map((question, index) => (
          <>
            <PreviewQuestion question={question.question} />
          </>
        ))}
        <div className="float-end">
          <button className="btn btn-sm btn-info" 
          disabled={tempSurvey.questions.length<=0} 
          onClick={event=>(nextStep(+1))}>
            Next
          </button>
        </div>
        <div>
          <NewQuestion />
        </div>
    </div>
  );
};

export default AllQuestionsPreview;
