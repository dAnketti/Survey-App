import { DatePicker, DateRangePickerDay } from "@mui/lab";
import DateRangePickerInput from "@mui/lab/DateRangePicker/DateRangePickerInput";
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
  return axios.post(Urls.SURVEY_URL + Urls.SAVE_SURVEY,tempSurvey );
};

export const deleteSurvey = (id) => {  
  return axios.delete(Urls.SURVEY_URL + Urls.DELETE_SURVEY+"/"+id );
};


export const getAllSurveyTitleAndId = () => {
  return axios.get(Urls.SURVEY_URL + Urls.FIND_ALL_SURVEYS_TITLE_AND_ID);
};

export const getfindByIdSurvey= (id) => {
  return axios.get(Urls.SURVEY_URL + Urls.FIND_BY_ID_SURVEY+"/"+id);
};



