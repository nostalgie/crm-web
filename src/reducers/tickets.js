import {
  TICKETS_REQUEST_START,
  TICKETS_REQUEST_SUCCESS,
  TICKETS_REQUEST_FAILURE
} from "constants/redux";

export const initState = {
  tickets: [],
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case TICKETS_REQUEST_START: {
      return {
        ...state,
        error: null
      };
    }
    case TICKETS_REQUEST_SUCCESS: {
      return {
        ...state,
        tickets: action.tickets
      };
    }
    case TICKETS_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.message
      };
    }
    default:
      return state;
  }
};
