import Request from "./Request";
import { periods } from "constants/menus/filter";

class ApiService {
  constructor() {
    this.request = new Request();
  }

  login(username, password) {
    const url = "/login";
    const payload = { username, password };
    return this.request.post(url, { payload });
  }

  getTickets({ state, period, customer, startDate, endDate }, token) {
    const url = "/tickets";
    if (state === "awaiting") {
      state = "awaiting review";
    }

    console.log(state, period, customer, startDate, endDate);
    let params = { state, period };
    if (typeof customer === "number") {
      params.customer = customer;
    }

    if (period === periods.CUSTOM) {
      params.startDate = startDate;
      params.endDate = endDate;
    }

    return this.request.get(url, { params }, token);
  }

  addUpdate(token, ticketId, message, executorId) {
    const url = "tickets/update";
    const payload = {
      ticketId,
      message,
      executorId
    };

    return this.request.put(url, { payload }, token);
  }

  completeTicket(token, ticketId) {
    const url = "tickets/finish";
    const payload = {
      ticketId
    };

    return this.request.post(url, { payload }, token);
  }

  rateTicket(token, ticketId, rating) {
    const url = "tickets/rate";
    const payload = {
      ticketId,
      rating
    };

    return this.request.post(url, { payload }, token);
  }
}

export default new ApiService();
