import { ADD_QUESTION_SURVEY, NEW_QUESTION } from "./ReduceConstants";


export const newQuestionAction = question => {
        return {
          type: NEW_QUESTION,
          question
        };
};

export const addQuestionToTheSurvey = question => {
    return {
      type: ADD_QUESTION_SURVEY,
      question
    };
};

export const updateAnswers = answers => {
  return {
    type: ADD_QUESTION_SURVEY,
    answers
  };
};