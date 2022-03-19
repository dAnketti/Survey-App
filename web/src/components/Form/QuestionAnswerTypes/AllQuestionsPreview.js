import React from "react";
import PreviewQuestion from "./PreviewQuestion";
import { useDispatch, useSelector } from "react-redux";
import {newQuestionAction} from '../../../redux/surveyActions';

const AllQuestionsPreview = (props) => {
  const { survey: tempSurvey } = useSelector((store) => ({
    survey: store.survey,
  }));

  return (
    <div
      id="question-area"
      className="mt-5 background-color-light color-dark border border-dark "
    >
      <h1>{tempSurvey.caption}</h1>
      {tempSurvey.questions &&
        tempSurvey.questions.map((question, index) => (
          <>
            <PreviewQuestion question={question.question} />
          </>
        ))}
    </div>
  );
};

export default AllQuestionsPreview;
