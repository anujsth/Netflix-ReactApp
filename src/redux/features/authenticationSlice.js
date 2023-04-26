import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    userEmailUsername: "",
    userPassword: "",
    loggedIn: false,
    error: "",
    likedMovie: [],
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
      userDetails
        ? userDetails.filter((item) => {
            if (
              item.username == state.userEmailUsername &&
              item.password == state.userPassword
            ) {
              state.loggedIn = true;
              // localStorage.setItem("login", 1);
            } else {
              state.error = "User not found";
            }
          })
        : (state.error = "User not found");

      // state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.error = "";
      state.userEmailUsername = "";
      state.userPassword = "";
      // localStorage.removeItem("login");
    },
    likeHandler: (state, action) => {
      state.likedMovie = [...state.likedMovie, action.payload];
      console.log(state.likedMovie);
    },
  },
});

export const {
  logIn,
  logOut,
  userSignInUsernameorEmail,
  userPasswordHandler,
  likeHandler,
} = authenticationSlice.actions;
export default authenticationSlice.reducer;
