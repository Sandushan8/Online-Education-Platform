import { base_url } from "../../constants/constant";
import axios from "axios";

export const login = async ({ name, password }) => {
  try {
    const response = await axios.post(`${base_url}/login`, {
      username: name,
      password,
      role: "student",
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const register = async ({ name, password }) => {
  try {
    const response = await axios.post(`${base_url}/register`, {
      username: name,
      password,
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};
