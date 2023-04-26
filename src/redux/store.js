import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./features/authenticationSlice";
import userReducer from "./features/userSlice";
import movieDetailReducer from "./features/movieDetailSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "authentication",
  storage,
  // whitelist: ["authentication"],
  blacklist: ["error", "likedMovie"],
};

const rootReducers = combineReducers({
  authentication: persistReducer(persistConfig, authenticationReducer),
  user: userReducer,
  movieDetail: movieDetailReducer,
});

// const persistedReducer = persistReducer(persistConfig, authenticationReducer);

export const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk],
});

export const persistor = persistStore(store);
