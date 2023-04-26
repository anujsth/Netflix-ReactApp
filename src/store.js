import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./features/authenticationSlice";
import userReducer from "./features/userSlice";
import movieDetailReducer from "./features/movieDetailSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication"],
};

const rootReducers = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  movieDetail: movieDetailReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
