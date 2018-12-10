import Request from "./Request";

class ApiService {
  constructor() {
    this.request = new Request();
  }

  async login(username, password) {
    const url = "/login";
    const payload = { username, password };
    return this.request.post(url, { payload });
  }

  async getTickets(state, token) {
    const url = "/tickets";
    if(state === 'awaiting'){
      state = 'awaiting review'
    }
    const params = { state };
    return this.request.get(url, { params }, token);
  }
}

export default new ApiService();
