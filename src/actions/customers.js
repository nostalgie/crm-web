import {
  CUSTOMERS_REQUEST_START,
  CUSTOMERS_REQUEST_SUCCESS,
  CUSTOMERS_REQUEST_FAILURE
} from 'constants/redux'
import api from 'services/api'

export const customersRequestStart = () => ({
  type: CUSTOMERS_REQUEST_START
})

export const customersRequestSuccess = customers => ({
  type: CUSTOMERS_REQUEST_SUCCESS,
  customers
})

export const customersRequestFailure = message => ({
  type: CUSTOMERS_REQUEST_FAILURE,
  message
})

export const getCustomers = () => {
  return async (dispatch, getState) => {
    dispatch(customersRequestStart())
    const { authToken } = getState().user
    let result

    try {
      result = await api.getCustomers(authToken)
      const { customers } = result.data
      dispatch(customersRequestSuccess(customers))
      return
    } catch (error) {
      if (error.response) {
        const { code } = error.response.data
        let message = `Кто-то пошел не так. Код ошибки: ${code}`
        dispatch(customersRequestFailure(message))
      } else {
        console.log(error)
      }
    }
  }
}
