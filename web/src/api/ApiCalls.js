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
