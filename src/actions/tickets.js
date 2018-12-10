import {
  TICKETS_REQUEST_START,
  TICKETS_REQUEST_SUCCESS,
  TICKETS_REQUEST_FAILURE
} from "constants/redux";
import api from "services/api";

export const ticketRequestStart = () => ({
  type: TICKETS_REQUEST_START
});

export const ticketRequestSuccess = tickets => ({
  type: TICKETS_REQUEST_SUCCESS,
  tickets
});

export const ticketRequestFailure = message => ({
  type: TICKETS_REQUEST_FAILURE,
  message
});

export const getTickets = state => {
  return async (dispatch, getState) => {
    dispatch(ticketRequestStart());
    const { authToken } = getState().user;
    let result;

    try {
      result = await api.getTickets(state, authToken);
      const { tickets } = result.data;
      dispatch(ticketRequestSuccess(tickets));
      return;
    } catch (error) {
      if (error.response) {
        const { code } = error.response.data;
        let message = `Что-то пошло не так. Код ошибки: ${code}`;
        dispatch(ticketRequestFailure(message));
      } else {
        console.log(error);
      }
    }
  };
};

export const addUpdate = (ticketId, message, executorId) => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user;
    let result;

    try {
      result = await api.addUpdate(authToken, ticketId, message, executorId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const completeTicket = ticketId => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user;
    let result;

    try {
      result = await api.completeTicket(authToken, ticketId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const rateTicket = (ticketId, rating) => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user;
    let result;

    try {
      result = await api.rateTicket(authToken, ticketId, rating);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};
