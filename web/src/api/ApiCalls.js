import axios from "axios";
import * as Urls from "./RestApiUrls";

export const postQuestion = (body) => {
  return axios
    .post(Urls.SURVEY_URL + Urls.QUESTION_SAVE, body)
    .then((data) => console.log(data));
};
