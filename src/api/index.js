import axios from "axios";

const BASE_API_URL = "https://5f6d939160cf97001641b049.mockapi.io/tkn";

const api = axios.create({
  baseURL: BASE_API_URL,
});

export default api;
