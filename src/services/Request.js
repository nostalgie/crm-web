const axios = require("axios");
const { API_URL } = require("../constants");

class Request {
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL
    });
  }

  post(url, { payload, headers }, token) {
    const _headers = {
      ...headers
    };
    if (token) {
      _headers.Authorization = `Bearer ${token}`;
    }

    return this.axios.post(url, payload, { headers: _headers });
  }

  put(url, { payload, headers }, token) {
    const _headers = {
      ...headers
    };
    if (token) {
      _headers.Authorization = `Bearer ${token}`;
    }

    return this.axios.put(url, payload, { headers: _headers });
  }

  get(url, { params }, token) {
    return this.axios.get(url, {
      params,
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

export default Request;
