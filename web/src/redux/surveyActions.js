import { QUESTION_MULTIPLE } from "../shared/Constants";
import {
  ADD_QUESTION_SURVEY,
  CLEAR_QUESTION_STATE,
  NEW_QUESTION,
  UPDATE_ANSWERS,
  REPLACE_ORDER_NUMBER,
  UPDATE_QUESTION_IN_SURVEY,
  DELETE_QUESTION_BY_ORDER,
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

export const updateSurveyInformation = (caption, expirationDate) => {
  console.log(caption, expirationDate);
  return {
    type: UPDATE_SURVEY,
    caption,
    expirationDate,
  };
};

export const clearQuestionAction = (question) => {
  return {
    type: CLEAR_QUESTION_STATE,
    question: {
      id: "",
      orders: "",
      subject: "",
      chooseQuestionType: QUESTION_MULTIPLE,
      content: "",
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

export const updateAnswers = (answers) => {
  return {
    type: UPDATE_ANSWERS,
    answers,
  };
};

export const replaceSequenceNumberWithAHigherSequenceNumber = (
  orders,
  process
) => {
  return {
    type: REPLACE_ORDER_NUMBER,
    orders,
    process,
  };
};

export const deleteQuestionByOrderInSurvey = (orders) => {
  return {
    type: DELETE_QUESTION_BY_ORDER,
    orders,
  };
};
