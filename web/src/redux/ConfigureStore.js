import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import surveyReducer from './surveyReducer.js';
  

const survey_state=localStorage.getItem('survey_app');

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
        startDate:0,
        expirationDate:0,
        isDraft:true,
        questions:[]   
      }  
};   

if(survey_state){
    survey_app= JSON.parse(survey_app);
}  
  

const ConfigureStore = () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(surveyReducer, survey_app, composeEnhancers(applyMiddleware(thunk)));

  
      return store;
  };
  
  export default ConfigureStore;