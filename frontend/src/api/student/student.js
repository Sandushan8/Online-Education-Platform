import { base_url } from "../../constants/constant";
import axiosInstance from "../axiosConfig/axiosConfig";

export const getStudents = async (token) => {
  try {
    const response = await axiosInstance.get(`${base_url}/student`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const getStudentById = async (token, id) => {
  try {
    const response = await axiosInstance.get(`${base_url}/student/${id}`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const addStudent = async (token, student) => {
  console.log("student", token);
  try {
    const response = await axiosInstance.post(`${base_url}/student`, student);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const updateStudent = async (token, id, student) => {
  try {
    const response = await axiosInstance.put(
      `${base_url}/student/${id}`,
      student
    );
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const deleteStudent = async (token, id) => {
  try {
    const response = await axiosInstance.delete(`${base_url}/student/${id}`);
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};
