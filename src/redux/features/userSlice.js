import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    username: "",
    password: "",
  },
  reducers: {
    emailInput: (state, action) => {
      state.email = action.payload;
    },
    usernameInput: (state, action) => {
      state.username = action.payload;
    },
    passwordInput: (state, action) => {
      state.password = action.payload;
      console.log();
    },
    storeUserDetail: (state) => {
      const values = JSON.parse(localStorage.getItem("users")) || [];
      const newVal = [...values, state];
      localStorage.setItem("users", [JSON.stringify(newVal)]);
      // console.log(state);
    },
  },
});

export const { emailInput, usernameInput, passwordInput, storeUserDetail } =
  userSlice.actions;
export default userSlice.reducer;
