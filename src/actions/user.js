import { LOGIN_START, LOGIN_SUCCESS } from "constants/redux";
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

export const login = (username, password) => {
  return async dispatch => {
    dispatch(loginStart());

    const result = await api.login(username, password);
    if (result.status === 200) {
      const { token, role } = result.data;

      storage.setItem(AUTH_TOKEN, token);

      dispatch(loginSuccess(username, token, role));

      return;
    }
  };
};
