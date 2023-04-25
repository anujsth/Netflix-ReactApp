import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./features/authenticationSlice";
import userReducer from "./features/userSlice";
import movieDetailReducer from "./features/movieDetailSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
    movieDetail: movieDetailReducer,
  },
});
