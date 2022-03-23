import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { QUESTION_MULTIPLE } from "../shared/Constants.js";
import surveyReducer from "./surveyReducer.js";

const survey_state = localStorage.getItem("survey_app");

let survey_app = {
  auth: {
    isLoggedIn: false,
    userID: undefined,
    username: undefined,
  },
  question: {
    id: "",
    orders: "",
    subject: "",
    chooseQuestionType: QUESTION_MULTIPLE,
    questionBody: "",
    answers: [],
  },
  survey: {
    id: "",
    title: "",
    caption: "",
    startDate: 0,
    expirationDate: 0,
    draft: true,
    questions: [],
  },
};

if (survey_state) {
  survey_app = JSON.parse(survey_state);
}

const updateStateInStorage = (newState) => {
  localStorage.setItem("survey_app", JSON.stringify(newState));
};

const ConfigureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    surveyReducer,
    survey_app,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    updateStateInStorage(store.getState());
  });

  return store;
};

export default ConfigureStore;
