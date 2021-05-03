import axios from "axios";

export const API_ROOT = process.env.REACT_APP_API as string;

axios.interceptors.request.use(
  function (config) {
    const store = JSON.parse(localStorage.getItem("store") || "");
    config.headers["Content-Type"] = "application/json";
    if (store?.usuario) {
      config.headers["Authorization"] = "Bearer " + store?.token;
    }
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
