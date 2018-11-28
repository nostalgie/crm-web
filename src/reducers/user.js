import { LOGIN_START } from '../constants/redux';

export const initState = {
  authToken: '',
  isLoggingIn: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    default:
      return state;
  }
};
