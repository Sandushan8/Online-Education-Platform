import { base_url } from "../../constants/constant";
import axios from "axios";

export const getEnrollment = async (token) => {
  try {
    const response = await axios.get(`${base_url}/enrollment`, {
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

export const addEnrollment = async (token, enrollment) => {
  try {
    const response = await axios.post(`${base_url}/enrollment`, enrollment, {
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

export const updateEnrollment = async (token, id, enrollment) => {
  try {
    const response = await axios.put(
      `${base_url}/enrollment/${id}`,
      enrollment,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("eerr", error);
    return error;
  }
};

export const deleteEnrollment = async (token, id) => {
  try {
    const response = await axios.delete(`${base_url}/enrollment/${id}`, {
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
