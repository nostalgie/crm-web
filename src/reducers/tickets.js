import {
  TICKETS_REQUEST_START,
  TICKETS_REQUEST_SUCCESS,
  TICKETS_REQUEST_FAILURE,
  TICKET_INFO_SUCCESS
} from "constants/redux";

export const initState = {
  tickets: [],
  pages: 1,
  currentPage: 1,
  fullTicket: null,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case TICKETS_REQUEST_START: {
      return {
        ...state,
        error: null,
      };
    }
    case TICKETS_REQUEST_SUCCESS: {
      return {
        ...state,
        tickets: action.tickets,
        pages: action.pages,
        currentPage: action.currentPage
      };
    }
    case TICKETS_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.message
      };
    }
    case TICKET_INFO_SUCCESS: {
      return {
        ...state,
        fullTicket: action.ticket
      };
    }
    default:
      return state;
  }
};
