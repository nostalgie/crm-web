import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "constants/redux";
import storage from "services/storage";
import { AUTH_TOKEN } from "../constants";

export const initState = {
  authToken: storage.getItem(AUTH_TOKEN),
  username: null,
  role: null,
  isLoggingIn: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true,
        error: null
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
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: action.message,
        isLoggingIn: false
      };
    }
    default:
      return state;
  }
};
