import { base_url } from "../../constants/constant";
import axios from "axios";

export const getCourses = async (token) => {
  try {
    const response = await axios.get(`${base_url}/course`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const addCourse = async (token, course) => {
  try {
    const response = await axios.post(`${base_url}/course`, course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const updateCourse = async (token, id, course) => {
  try {
    const response = await axios.put(`${base_url}/course/${id}`, course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const deleteCourse = async (token, id) => {
  try {
    const response = await axios.delete(`${base_url}/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};
