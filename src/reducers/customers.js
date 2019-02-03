import {
  CUSTOMERS_REQUEST_START,
  CUSTOMERS_REQUEST_SUCCESS,
  CUSTOMERS_REQUEST_FAILURE
} from "constants/redux";

export const initState = {
  customers: [],
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case CUSTOMERS_REQUEST_START: {
      return {
        ...state,
        error: null
      }
    }
    case CUSTOMERS_REQUEST_SUCCESS: {
      return {
        ...state,
        customers: action.customers
      }
    }
    case CUSTOMERS_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.message
      }
    }
    default:
      return state
  }
}
