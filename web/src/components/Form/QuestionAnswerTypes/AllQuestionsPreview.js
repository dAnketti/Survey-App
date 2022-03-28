import React from "react";
import PreviewQuestion from "./PreviewQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateSurvey, saveSurvey } from "../../../api/ApiCalls";
import { clearSurveyTemplate } from "../../../redux/surveyActions";
import { format } from "date-fns";
const AllQuestionsPreview = (props) => {
  const { survey: tempSurvey } = useSelector((store) => ({
    survey: store.survey,
  }));

  const dispatch = useDispatch();
  const saveSurveyBtn = async (e) => {
    if (tempSurvey.id && tempSurvey.id > 0) {
      try {
        await updateSurvey(tempSurvey);
        dispatch(clearSurveyTemplate());
      } catch (error) {
        console.log("error.data");
      }
    } else {
      try {
        await saveSurvey(tempSurvey);
        dispatch(clearSurveyTemplate());
      } catch (error) {
        console.log("error.data");
      }
    }
  };
  const { questions } = tempSurvey;
  questions.sort((a, b) => a.place - b.place);
  let startDateStr, fnishDateStr;
  try {
    startDateStr = format(new Date(tempSurvey.startDate), "yyyy-MM-dd");
    fnishDateStr = format(new Date(tempSurvey.fnishDate), "yyyy-MM-dd");
  } catch (error) {}

  return (
    <div
      id="question-area"
      className="mt-5 background-color-light color-dark border border-dark "
    >
      <div className="container mb-5">
        <div className="card-title float-end">
          <h6>Start Date {startDateStr}</h6>

          <h6> Fnish Date {fnishDateStr}</h6>
        </div>
        <h1 className="card-title text-center">{tempSurvey.title}</h1>
        <h6 className="card-title">{tempSurvey.caption}</h6>
      </div>
      {questions &&
        questions.map((question, index) => (
          <PreviewQuestion key={index} question={question} />
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
