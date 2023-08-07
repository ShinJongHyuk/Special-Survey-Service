import axios from "axios";


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response) => {

    if (!response.data.success) {
      if (response.data.apiError.status === 1005) {
        console.log("토큰이 실패했습니다.")
        const refreshToken = localStorage.getItem("refreshToken");
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        await api.post("/refresh", {
          email,
          refreshToken,
          password
        })
          .then((res) => {
            const accessToken = res.data?.response?.accessToken;
            if (res.data.success) {
              // console.log(res.data.response.accessToken)
              response.config.headers["Authorization"] = `Bearer ${res.data.response.accessToken}`
              localStorage.setItem("accessToken", res.data.response.accessToken)
              // console.log(response.config.headers)
              console.log("성공")
              console.log(api.request(response.config))
              return api.request(response.config)
            }
          })
      }
    }
    return response;
  },
  async (error) => {

    return Promise.reject(error);
  }
);

export default api;
