import { QUESTION_MULTIPLE } from "../shared/Constants";
import { 
  ADD_QUESTION_SURVEY,
  CLEAR_QUESTION_STATE,
  NEW_QUESTION,
  UPDATE_ANSWERS,
  REPLACE_ORDER_NUMBER,
  DELETE_QUESTION_BY_ORDER
} from "./ReduceConstants";


export const newQuestionAction = question => {
  
        return {
          type: NEW_QUESTION,
          question
        };
};

export const clearQuestionAction = question => {
  return {
    type: CLEAR_QUESTION_STATE,
    question:{
      id:"",
      order:"",
      subject:"",
      chooseQuestionType: QUESTION_MULTIPLE,
      content: "",    
      answers: {}    
    }
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
    type: UPDATE_ANSWERS,
    answers
  };
};

export const replaceSequenceNumberWithAHigherSequenceNumber = (order,process) => {
  return {
    type: REPLACE_ORDER_NUMBER,
    order,
    process
  };
};

export const deleteQuestionByOrderInSurvey = order => {
  return {
    type: DELETE_QUESTION_BY_ORDER,
    order
  };
};