const axios = require("axios");
const { API_URL } = require("../constants");

class Request {
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL
    });
  }

  post(url, { payload }) {
    return this.axios.post(url, payload);
  }
}

export default Request;
