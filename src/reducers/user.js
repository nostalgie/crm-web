import { LOGIN_START, LOGIN_SUCCESS } from "constants/redux";
import storage from "services/storage";
import { AUTH_TOKEN } from "../constants";

export const initState = {
  authToken: storage.getItem(AUTH_TOKEN),
  username: null,
  role: null,
  isLoggingIn: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        authToken: action.token,
        username: action.username,
        role: action.role,
        isLoggingIn: false
      };
    }
    default:
      return state;
  }
};
