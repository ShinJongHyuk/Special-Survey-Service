import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

api.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  async (response: any) => {
    if (!response.data.success) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        localStorage.removeItem("userStore");


        return response;
      }
      if (response.data.apiError.status === 1005) {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        const newResponse = await api
          .post("/refresh", {
            email,
            refreshToken,
            password,
          })
          .then(async (res) => {
            if (res.data.success) {
              response.config.headers["Authorization"] = `Bearer ${res.data.response.accessToken}`;
              localStorage.setItem("accessToken", res.data.response.accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              const newResponse = await api.request(response.config);
              return newResponse;
            }
          });

        return newResponse;
      }
    }
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default api;
