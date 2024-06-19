import { base_url } from "../../constants/constant";
import axiosInstance from "../axiosConfig/axiosConfig";

export const getStudents = async () => {
  try {
    const response = await axiosInstance.get(`/student`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const getStudentById = async ({ token, id }) => {
  try {
    const response = await axiosInstance.get(`/student/${id}`, {
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

export const addStudent = async (student) => {
  try {
    const response = await axiosInstance.post(`/student`, student);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const updateStudent = async (id, student) => {
  try {
    const response = await axiosInstance.put(`/student/${id}`, student);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await axiosInstance.delete(`/student/${id}`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};
