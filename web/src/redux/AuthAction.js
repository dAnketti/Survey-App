import { LOGIN_ACTION,LOG_OUT_SURVEY } from "./ReduceConstants";

export const loginSuccess = (authState) => {

    return {
      type: LOGIN_ACTION,
      payload:authState
    };
  };

  export const logoutSurvey = () => {
    return {
      type: LOG_OUT_SURVEY,
      payload:-1
    };
  };
