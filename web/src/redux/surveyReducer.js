import { QUESTION_MULTIPLE } from '../shared/Constants';
import { 
  ADD_QUESTION_SURVEY, 
  NEW_QUESTION, 
  UPDATE_ANSWERS,
  DELETE_QUESTION_BY_ORDER,
  CLEAR_QUESTION_STATE } from './ReduceConstants';


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
        chooseQuestionType: QUESTION_MULTIPLE,
        content: "",    
        answers: {}
        
      },
    survey: {
        id:"",
        title:"",
        caption:"",
        groupList:[],
        startDate:0,
        expirationDate:0,
        isDraft:true,
        questions:{}  
      }  
};


const surveyReducer = (state = {...survey_app}, action) => {
  
    switch(action.type) {
        case NEW_QUESTION:
          return {
              ...state,
              question:action.question
          };
        
        case CLEAR_QUESTION_STATE:
            const chooseQuestionType=state.question.chooseQuestionType;
          return {
              ...state,
              question:{
                ...action.question,
                chooseQuestionType
              }
          };
          
        case ADD_QUESTION_SURVEY:
          let count=1;
          state.survey.questions && Object.entries(state.survey.questions).map(([key,question],index)=>{
            count=parseInt(question.order)+1;
            console.log("reduce length: "+count)  
          }); 

               
                  
        const question={
          ...action.question,
          order:parseInt(count)
        };

          return {
              ...state,
              survey:{
                  ...state.survey,
                questions:{...state.survey.questions,
                  [count]:question}
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

        case DELETE_QUESTION_BY_ORDER:
            
            const index = action.order;
            const array={
              ...state.survey.questions    
            }
            delete array[index]                    
            
          return {
              ...state,
              survey:{
                  ...state.survey,
                questions:array
              }
              
          };
        default:
          return state;
      }  
};

export default surveyReducer;