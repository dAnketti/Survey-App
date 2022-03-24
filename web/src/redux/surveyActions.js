import { QUESTION_MULTIPLE } from "../shared/Constants";
import {
  ADD_QUESTION_SURVEY,
  CLEAR_QUESTION_STATE,
  NEW_QUESTION,
  UPDATE_ANSWERS,
  REPLACE_ORDER_NUMBER,
  UPDATE_QUESTION_IN_SURVEY,
  DELETE_QUESTION_BY_ORDER,
  CLEAR_SURVEY_TEMPLATE,
  RESPONSE_SURVEY_UPDATE,
  UPDATE_SURVEY,
} from "./ReduceConstants";

export const newQuestionAction = (question) => {
  return {
    type: NEW_QUESTION,
    question,
  };
};

export const updateQuestionAction = (question) => {
  return {
    type: UPDATE_QUESTION_IN_SURVEY,
    question,
  };
};

export const updateSurveyInformation = (title, expirationDate) => {
 
  return {
    type: UPDATE_SURVEY,
    title,
    expirationDate,
  };
};

export const clearQuestionAction = (question) => {
  return {
    type: CLEAR_QUESTION_STATE,
    question: {
      id: "",
      place: "",
      subject: "",
      chooseQuestionType: QUESTION_MULTIPLE,
      questionBody: "",
      answers: {},
    },
  };
};
export const addQuestionToTheSurvey = (question) => {
  return {
    type: ADD_QUESTION_SURVEY,
    question,
  };
};

export const clearSurveyTemplate = () => {
  return {
    type: CLEAR_SURVEY_TEMPLATE,
    
  };
};

export const updateAnswers = (answers) => {
  return {
    type: UPDATE_ANSWERS,
    answers,
  };
};

export const responseSurveyUpdate = (survey) => {
  return {
    type: RESPONSE_SURVEY_UPDATE,
    survey,
  };
};

export const replaceSequenceNumberWithAHigherSequenceNumber = (
  place,
  process
) => {
  return {
    type: REPLACE_ORDER_NUMBER,
    place,
    process,
  };
};

export const deleteQuestionByOrderInSurvey = (place) => {
  return {
    type: DELETE_QUESTION_BY_ORDER,
    place,
  };
};
