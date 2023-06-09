import axios, { Axios } from "axios";

const axiosClient = new Axios({
  baseURL: "/",
  transformRequest: axios.defaults.transformRequest,
  transformResponse: (data) => data && JSON.parse(data),
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  validateStatus: (status: number) => status < 400,
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosClient };
