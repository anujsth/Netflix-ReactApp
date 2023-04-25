import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    userEmailUsername: "",
    userPassword: "",
    loggedIn: false,
    error: "",
  },
  reducers: {
    userSignInUsernameorEmail: (state, action) => {
      state.userEmailUsername = action.payload;
    },
    userPasswordHandler: (state, action) => {
      state.userPassword = action.payload;
    },
    logIn: (state) => {
      const userDetails = JSON.parse(localStorage.getItem("users"));
      userDetails.filter((item) =>
        item.username == state.userEmailUsername &&
        item.password == state.userPassword
          ? (state.loggedIn = true)
          : (state.error = "User not found")
      );
      // state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.error = " ";
    },
  },
});

export const { logIn, logOut, userSignInUsernameorEmail, userPasswordHandler } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
