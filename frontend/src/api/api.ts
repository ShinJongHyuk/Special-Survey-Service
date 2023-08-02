import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
