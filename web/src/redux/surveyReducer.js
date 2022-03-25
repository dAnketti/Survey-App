import { QUESTION_MULTIPLE } from "../shared/Constants";
import {
  LOGIN_ACTION,
  LOG_OUT_SURVEY,
  ADD_QUESTION_SURVEY,
  NEW_QUESTION,
  UPDATE_ANSWERS,
  REPLACE_ORDER_NUMBER,
  DELETE_QUESTION_BY_ORDER,
  UPDATE_QUESTION_IN_SURVEY,
  UPDATE_SURVEY,
  CLEAR_SURVEY_TEMPLATE,
  RESPONSE_SURVEY_UPDATE,
  CLEAR_QUESTION_STATE,
} from "./ReduceConstants";

let survey_app = {
  auth: {
    isLoggedIn: false,
    userID: undefined,
    username: undefined,
  },
  question: {
    id: "",
    place: "",
    subject: "",
    chooseQuestionType: QUESTION_MULTIPLE,
    questionBody: "",
    answers: [],
  },
  survey: {
    id: "",
    title: "",
    caption: "",
    className: "",
    isDraft: true,
    groupList: [],
    startDate: 0,
    expirationDate: 0,
    updateDate:"",
    questions: [],
  },
};

const surveyReducer = (state = { ...survey_app }, action) => {
  switch (action.type) {
    case NEW_QUESTION:
      return {
        ...state,
        question: action.question,
      };

    case CLEAR_SURVEY_TEMPLATE:
      return {
        ...state,
        question:{
          ...survey_app.question
        },
       survey:{
         ...survey_app.survey
       }
      };

    case RESPONSE_SURVEY_UPDATE:
      return {
        ...state,
       survey:{
         ...action.survey
       }
      };

    case CLEAR_QUESTION_STATE:
      const chooseQuestionType = state.question.chooseQuestionType;
      return {
        ...state,
        question: {
          ...survey_app.question,
          chooseQuestionType,
        },
      };

    case ADD_QUESTION_SURVEY:
      let count = 1;
      if(state.survey.questions && state.survey.questions.length > 0){
          count = state.survey.questions.length*1+1;
        }
        

      const question = {
        ...action.question,
        place:count
      };

      return {
        ...state,
        survey: {
          ...state.survey,
          questions: [...state.survey.questions,question],
        },
      };

    case UPDATE_SURVEY:
      return {
        ...state,
        survey: {
          ...state.survey,
          title: action.title,
          caption: action.caption,
          expirationDate: action.expirationDate,
        },
      };

    case UPDATE_ANSWERS:
      return {
        ...state,
        question: {
          ...state.question,
          answers: action.answers,
        },
      };

    case DELETE_QUESTION_BY_ORDER:
      const index = action.place;
      let array = state.survey.questions.filter((value, i, arr) => {
        let or = value.place;
        return or !== index;
      });

      array = array.filter((value, i, arr) => {
        let q = value.question;
        value.place = i + 1;
        q = {
          ...q,
          place: parseInt(i) + 1,
        };
        value.question = q;
        return value;
      });

      return {
        ...state,
        survey: {
          ...state.survey,
          questions: array,
        },
      };

    case REPLACE_ORDER_NUMBER:
        let tempQuestions=state.survey.questions;
        const placeNum = parseInt(action.place)-1;
        console.log("placeNum:",placeNum);
        const process = action.process; // up/down
        let tempQ=tempQuestions[placeNum];
      if (process === "down" && placeNum < tempQuestions.length - 1) { 
        tempQ.place=parseInt(placeNum)+2;
        tempQuestions[placeNum]=tempQuestions[parseInt(placeNum)+1];     
        tempQuestions[placeNum].place=parseInt(placeNum) +1;    
        tempQuestions[parseInt(placeNum)+1]=tempQ;

      }else if (process === "up" && placeNum > 0) {     
        tempQ.place=parseInt(placeNum);  
        tempQuestions[placeNum]=tempQuestions[parseInt(placeNum)-1]; 
        tempQuestions[placeNum].place=parseInt(placeNum)+1;     
        tempQuestions[parseInt(placeNum)-1]=tempQ;     
      }
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: tempQuestions,
        },
      };

    case UPDATE_QUESTION_IN_SURVEY:
      const temp = state.survey.questions;
      temp[parseInt(action.question.place) - 1].question = action.question;

      return {
        ...state,
        survey: {
          ...state.survey,
          questions: temp,
        },
      };
   
      case LOGIN_ACTION:
        return{
          ...state,
          auth:{
            isLoggedIn:true,
            user:action.payload
          }
          
        };
      case LOG_OUT_SURVEY:
        return{
          ...state,
          auth:{
            isLoggedIn:false,
            authId:-1
          }
          
        };

      default:
      return state;
  }
};

export default surveyReducer;
