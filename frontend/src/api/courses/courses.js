import { base_url } from "../../constants/constant";
import axiosInstance from "../axiosConfig/axiosConfig";

export const getCourses = async () => {
  try {
    const response = await axiosInstance.get(`${base_url}/course`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const addCourse = async (course) => {
  try {
    const response = await axiosInstance.post(`${base_url}/course`, course);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const updateCourse = async (id, course) => {
  try {
    const response = await axiosInstance.put(
      `${base_url}/course/${id}`,
      course
    );
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await axiosInstance.delete(`${base_url}/course/${id}`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};
