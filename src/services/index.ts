import axios from "axios";

export const API_ROOT = process.env.REACT_APP_API as string;

axios.interceptors.request.use(
  function (config) {
    const store = JSON.parse(localStorage.get("store"));
    if (store?.usuario) {
      config.headers["www-authenticate"] = store?.usuario;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
