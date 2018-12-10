import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "constants/redux";
import api from "services/api";
import storage from "services/storage";
import { AUTH_TOKEN } from "../constants";

export const loginStart = () => ({
  type: LOGIN_START
});

export const loginSuccess = (username, token, role) => ({
  type: LOGIN_SUCCESS,
  username,
  token,
  role
});

export const loginFailure = message => ({
  type: LOGIN_FAILURE,
  message
});

export const login = (username, password) => {
  return async dispatch => {
    dispatch(loginStart());
    let result;

    try {
      result = await api.login(username, password);
      const { token, role } = result.data;

      storage.setItem(AUTH_TOKEN, token);
      storage.setItem("username", username);
      storage.setItem("role", role);
      dispatch(loginSuccess(username, token, role));
      return;
    } catch (error) {
      const { code } = error.response.data;
      let message;

      if (code === 401) {
        message = "Неверное имя пользователя или пароль.";
      } else {
        message = "Произошел сбой. Пожалуйста, повторите попытку.";
      }

      dispatch(loginFailure(message));
    }
  };
};
