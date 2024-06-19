import { base_url } from "../../constants/constant";
import axiosInstance from "../axiosConfig/axiosConfig";

export const login = async ({ name, password }) => {
  try {
    const response = await axiosInstance.post(`/login`, {
      username: name,
      password,
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const register = async ({ name, password }) => {
  try {
    const response = await axiosInstance.post(`/register`, {
      username: name,
      password,
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};
