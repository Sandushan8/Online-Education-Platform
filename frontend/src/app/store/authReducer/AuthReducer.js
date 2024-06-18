import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  token: "",
  user: {
    username: "",
    role: "",
    uuid: "",
  },
};

export const authReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    onLoginSuccess: (state, { payload }) => {
      state.isAuth = payload.isAuth;
      state.token = payload.token;
      state.user = payload.user;
    },
    onLogoutSuccess: (state) => {
      console.log("Payload in Redux");
      state.isAuth = false;
      state.token = "";
      state.user = {
        username: "",
        role: "",
        uuid: "",
      };
    },
  },
});

export const { onLoginSuccess, onLogoutSuccess } = authReducer.actions;

export default authReducer.reducer;
