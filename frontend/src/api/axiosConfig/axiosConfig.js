import axios from "axios";
import { store } from "../../app/store/store";
import { onLogoutSuccess } from "../../app/store/authReducer/AuthReducer";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(onLogoutSuccess());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
