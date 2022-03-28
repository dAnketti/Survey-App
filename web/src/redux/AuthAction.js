import {
  LOGIN_ACTION,
  LOG_OUT_SURVEY,
  LOGIN_REMEMBER_ME,
} from "./ReduceConstants";

export const loginSuccess = (authState) => {
  return {
    type: LOGIN_ACTION,
    payload: authState,
  };
};

export const rememberClicked = (rememberMe) => {
  return {
    type: LOGIN_REMEMBER_ME,
    rememberMe,
  };
};

export const logoutSurvey = () => {
  return {
    type: LOG_OUT_SURVEY,
    payload: -1,
  };
};
