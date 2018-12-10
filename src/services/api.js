import Request from "./Request";

class ApiService {
  constructor() {
    this.request = new Request();
  }

  login(username, password) {
    const url = "/login";
    const payload = { username, password };
    return this.request.post(url, { payload });
  }

  getTickets(state, token) {
    const url = "/tickets";
    if (state === "awaiting") {
      state = "awaiting review";
    }
    const params = { state };
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
