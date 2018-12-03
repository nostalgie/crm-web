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
}

export default new ApiService();
