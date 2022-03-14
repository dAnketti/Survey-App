import React from 'react';
import { ADD_QUESTION_SURVEY, NEW_QUESTION, UPDATE_ANSWERS } from './ReduceConstants';


let survey_app= {
    auth:{
        isLoggedIn: false,
        userID: undefined,
        username: undefined        
    },
    question: {
        id:"",
        order:"",
        subject:"",
        chooseQuestionType: "",
        content: "",    
        answers: []
        
      },
    survey: {
        id:"",
        title:"",
        caption:"",
        groupList:[],
        startDate:0,
        expirationDate:0,
        isDraft:true,
        questions:[]   
      }  
};


const surveyReducer = (state = {...survey_app}, action) => {
    
    switch(action.type) {
        case NEW_QUESTION:
          return {
              ...state,
              question:action.question
          };
        case ADD_QUESTION_SURVEY:
          return {
              ...state,
              survey:{
                  ...state.survey,
                questions:[...state.survey.questions,action.question]
              }
              
          };
          case UPDATE_ANSWERS:
          return {
              ...state,
              question:{
                  ...state.question,
                answers:action.answers
              }
              
          };
        default:
          return state;
      }  
};

export default surveyReducer;