import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import App from "./App";
import { useNavigate, Navigate } from "react-router-dom";
import { logIn } from "./redux/features/authenticationSlice";

const Protected = () => {
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.authentication);

  if (!loggedIn) {
    return <Navigate to="/signin" replace />;
  } else {
    return <App />;
  }
};

export default Protected;
