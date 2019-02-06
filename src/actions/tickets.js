import {
  TICKETS_REQUEST_START,
  TICKETS_REQUEST_SUCCESS,
  TICKETS_REQUEST_FAILURE,
  TICKET_INFO_SUCCESS
} from 'constants/redux'
import api from 'services/api'

export const ticketsRequestStart = () => ({
  type: TICKETS_REQUEST_START
})

export const ticketsRequestSuccess = (tickets, pages, currentPage) => ({
  type: TICKETS_REQUEST_SUCCESS,
  tickets,
  pages,
  currentPage
})

export const ticketsRequestFailure = message => ({
  type: TICKETS_REQUEST_FAILURE,
  message
})

export const ticketInfoSuccess = ticket => ({
  type: TICKET_INFO_SUCCESS,
  ticket
})

export const getTickets = ({
  state,
  period,
  customer,
  startDate,
  endDate,
  page
}) => {
  return async (dispatch, getState) => {
    dispatch(ticketsRequestStart())
    const { authToken } = getState().user
    let result
    try {
      result = await api.getTickets(
        { state, period, customer, startDate, endDate, page },
        authToken
      )
      const { tickets, pages } = result.data
      dispatch(ticketsRequestSuccess(tickets, pages, page))
      return
    } catch (error) {
      if (error.response) {
        const { code } = error.response.data
        let message = `Что-то пошло не так. Код ошибки: ${code}`
        dispatch(ticketsRequestFailure(message))
      } else {
        console.log(error)
      }
    }
  }
}

export const getTicketInfo = ticketId => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user
    let result

    try {
      result = await api.getTicketInfo(ticketId, authToken)
      const { ticket } = result.data
      dispatch(ticketInfoSuccess(ticket))
      return
    } catch (error) {
      console.log(error)
    }
  }
}

export const addUpdate = (ticketId, message, executorId) => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user
    let result

    try {
      result = await api.addUpdate(authToken, ticketId, message, executorId)
    } catch (error) {
      console.log(error)
    }
  }
}

export const completeTicket = ticketId => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user
    let result

    try {
      result = await api.completeTicket(authToken, ticketId)
    } catch (error) {
      console.log(error)
    }
  }
}

export const rateTicket = (ticketId, rating) => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user
    let result

    try {
      result = await api.rateTicket(authToken, ticketId, rating)
    } catch (error) {
      console.log(error)
    }
  }
}

export const createTicket = ({
  firstName,
  lastName,
  phoneNumber,
  description,
  type,
  customer
}) => {
  return async (dispatch, getState) => {
    const { authToken } = getState().user
    let result
    try {
      result = await api.createTicket(authToken, {
        firstName,
        lastName,
        phoneNumber,
        description,
        type,
        customerId: customer
      })

      return result
    } catch (error) {
      console.log(error)
    }
  }
}
