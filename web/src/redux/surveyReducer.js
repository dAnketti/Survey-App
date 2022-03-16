import { QUESTION_MULTIPLE } from '../shared/Constants';
import { 
  ADD_QUESTION_SURVEY, 
  NEW_QUESTION, 
  UPDATE_ANSWERS,
  REPLACE_ORDER_NUMBER,
  DELETE_QUESTION_BY_ORDER,
  UPDATE_QUESTION_IN_SURVEY,
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
        
        case CLEAR_QUESTION_STATE:
            const chooseQuestionType=state.question.chooseQuestionType;
          return {
              ...state,
              question:{
                ...survey_app.question,
                chooseQuestionType
              }
          };
          
        case ADD_QUESTION_SURVEY:
          let count=1;
          state.survey.questions 
          && state.survey.questions.length>0  
          && state.survey.questions.map((m,i)=>{console.log(m.order)
          count=parseInt(m.order)+1;
          }); 

        const question={
          ...action.question,
          order:parseInt(count)
        };

          return {
              ...state,
              survey:{
                  ...state.survey,
                questions:[...state.survey.questions,
                  {order:count, question:question}
                  ]
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
            let array=state.survey.questions.filter(
              (value,i,arr)=>{
                let or=value.order;              
                return  or!==index
              }                          
            );
            
            array= array.filter(
              (value,i,arr)=>{                
                let q=value.question;
                value.order=i+1;
                q={
                  ...q,
                  order:parseInt(i)+1
                };  
                value.question=q;          
                return value;
              }                          
            );
            
                              
            
          return {
              ...state,
              survey:{
                  ...state.survey,
                questions:array
              }
              
          };
        
        case REPLACE_ORDER_NUMBER:
            const tempQuestions=state.survey.questions;
            const orderNum=parseInt(action.order)-1;
            const process=action.process; // up/down
            if(process==='down' && orderNum<(tempQuestions.length-1)){
                let temp=tempQuestions[orderNum];
                tempQuestions[orderNum]=tempQuestions[orderNum+1]; 
                tempQuestions[orderNum].order=orderNum+1; 
                tempQuestions[orderNum].question.order=orderNum+1;         
                tempQuestions[orderNum+1]=temp;
                tempQuestions[orderNum+1].order=orderNum+2;
                tempQuestions[orderNum+1].question.order=orderNum+2;
                
                
            }else if(process==='up' && orderNum>0){
              let temp=tempQuestions[orderNum]; //2
                tempQuestions[orderNum]=tempQuestions[orderNum-1]; //1
                tempQuestions[orderNum].order=orderNum+1; 
                tempQuestions[orderNum].question.order=orderNum+1;         
                tempQuestions[orderNum-1]=temp;
                tempQuestions[orderNum-1].order=orderNum;
                tempQuestions[orderNum-1].question.order=orderNum;
              
            }

            return{
              ...state,
              survey:{
                ...state.survey,
                questions:tempQuestions
              } 
            };
        
        case UPDATE_QUESTION_IN_SURVEY:
          const temp=state.survey.questions;
          temp[parseInt(action.question.order)-1].question=action.question;

          return {
            ...state,
            survey:{
              ...state.survey,
              questions:temp
            }
          }    
            default:
          return state;
      }  
      
};

export default surveyReducer;