import React, { useEffect } from "react";
import PreviewQuestion from "./PreviewQuestion";
import { useDispatch, useSelector } from "react-redux";
import NewQuestion from "./NewQuestion";
import { findAllSurveys, saveSurvey } from "../../../api/ApiCalls";
import { clearSurveyTemplate } from "../../../redux/surveyActions";

const AllQuestionsPreview = (props) => {
  const { survey: tempSurvey } = useSelector((store) => ({
    survey: store.survey,
  }));

  const dispatch=useDispatch();
  const saveSurveyBtn = async (e) => {
    try {      
      const res = await saveSurvey(tempSurvey);  
      dispatch(clearSurveyTemplate());
    } catch (error) {
      console.log("error.data");
    }
  };

  return (
    <div
      id="question-area"
      className="mt-5 background-color-light color-dark border border-dark "
    >
      <h1>{tempSurvey.title}</h1>
      <h3>{tempSurvey.caption}</h3>
      {tempSurvey.questions &&
        tempSurvey.questions.map((question, index) => (
          <>
            <PreviewQuestion question={question} />
          </>
        ))}
      <div className="float-end">
        <button
          className="btn btn-sm btn-info"
          disabled={tempSurvey.questions.length <= 0}
          onClick={saveSurveyBtn}
        >
          SAVE/UPDATE
        </button>
      </div>
    </div>
  );
};

export default AllQuestionsPreview;
