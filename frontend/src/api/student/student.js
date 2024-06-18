import { base_url } from "../../constants/constant";
import axios from "axios";

export const getStudents = async (token) => {
  try {
    const response = await axios.get(`${base_url}/student`, {
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

export const getStudentById = async (token, id) => {
  try {
    const response = await axios.get(`${base_url}/student/${id}`, {
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

export const addStudent = async (token, student) => {
  console.log("student", token);
  try {
    const response = await axios.post(`${base_url}/student`, student, {
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

export const updateStudent = async (token, id, student) => {
  try {
    const response = await axios.put(`${base_url}/student/${id}`, student, {
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

export const deleteStudent = async (token, id) => {
  try {
    const response = await axios.delete(`${base_url}/student/${id}`, {
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
