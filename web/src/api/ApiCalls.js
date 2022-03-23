import axios from "axios";
import * as Urls from "./RestApiUrls";

export const postQuestion = (body) => {
  return axios
    .post(Urls.SURVEY_URL + Urls.QUESTION_SAVE, body)
    .then((data) => console.log(data));
};

export const register = (body) => {
  return axios.post(Urls.AUTH_URL + Urls.AUTH_REGISTER, body);
};

export const login = (credentials) => {
  return axios.post(Urls.AUTH_URL + Urls.AUTH_LOGIN, credentials);
};

export const saveSurvey = (tempSurvey) => {
  return axios.post(Urls.SURVEY_URL + Urls.SAVE_SURVEY, {
    data: {
      ...tempSurvey,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const findAllSurveys = () => {
  return axios.get(Urls.SURVEY_URL + Urls.FIND_ALL_SURVEYS);
};
