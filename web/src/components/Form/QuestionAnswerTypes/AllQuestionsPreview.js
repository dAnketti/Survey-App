import React, { useEffect } from "react";
import PreviewQuestion from "./PreviewQuestion";
import { useSelector } from "react-redux";
import NewQuestion from "./NewQuestion";
import { findAllSurveys, saveSurvey } from "../../../api/ApiCalls";

const AllQuestionsPreview = (props) => {
  const { nextStep } = props;
  const { survey: tempSurvey } = useSelector((store) => ({
    survey: store.survey,
  }));

  useEffect(() => {
    findAllSurveys()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);
  const saveSurveyBtn = async (e) => {
    try {
      console.log(tempSurvey);
      const res = await saveSurvey(tempSurvey);
      console.log(res.data);
    } catch (error) {
      console.log("error.data");
    }
  };

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
