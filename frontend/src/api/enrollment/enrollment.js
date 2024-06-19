import { base_url } from "../../constants/constant";
import axiosInstance from "../axiosConfig/axiosConfig";

export const getEnrollment = async () => {
  try {
    const response = await axiosInstance.get(`/enrollment`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const addEnrollment = async (enrollment) => {
  try {
    const response = await axiosInstance.post(`/enrollment`, enrollment);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const updateEnrollment = async (id, enrollment) => {
  try {
    const response = await axiosInstance.put(`/enrollment/${id}`, enrollment);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const deleteEnrollment = async (id) => {
  try {
    const response = await axiosInstance.delete(`/enrollment/${id}`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};
