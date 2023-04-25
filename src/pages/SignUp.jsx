import React, { useState } from "react";
import "../signIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  emailInput,
  passwordInput,
  storeUserDetail,
  usernameInput,
} from "../features/userSlice";

const SignUp = () => {
  const [details, setDetails] = useState({
    userEmail: "",
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const emailHandler = (event) => {
    setDetails({ ...details, userEmail: `${event.target.value}` });
  };
  const usernameHandler = (event) => {
    setDetails({ ...details, userName: `${event.target.value}` });
  };
  const passwordHandler = (event) => {
    setDetails({ ...details, password: `${event.target.value}` });
  };
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/signin");
    dispatch(emailInput(details.userEmail));
    dispatch(usernameInput(details.userName));
    dispatch(passwordInput(details.password));
    setDetails({
      userEmail: "",
      userName: "",
      password: "",
    });
    dispatch(storeUserDetail());
  };

  return (
    <div className="signinImage relative flex flex-col items-center ">
      <img
        src="./netflixLogo.png"
        className="absolute top-5 left-7 h-25 w-40"
      />
      <div className=" bg-black bg-opacity-80 h-[41.25rem] w-[30.688rem] mt-[10rem]">
        <form
          action=""
          className="flex flex-col mt-[60px] mx-[68px]"
          onSubmit={submitHandler}
        >
          <p className="text-white text-3xl mb-[1.75rem]">Sign Up</p>
          <input
            type="email"
            required
            className="text-white pt-[0.6rem] mb-[1rem] pb-[0.4rem] px-[1rem]  h-[3rem] bg-[#333] rounded items-center placeholder-text-gray ]"
            placeholder="Email"
            onChange={emailHandler}
          />
          <input
            type="text"
            required
            className="text-white pt-[0.6rem] mb-[1rem] pb-[0.4rem] px-[1rem]  h-[3rem] bg-[#333] rounded items-center placeholder-text-gray ]"
            placeholder="Username"
            onChange={usernameHandler}
          />
          <input
            type="password"
            required
            className="text-white mb-[1.75rem] pt-[0.6rem] pb-[0.4rem] px-[1rem]  h-[3rem] bg-[#333] rounded items-center placeholder-text-gray ]"
            placeholder="Password"
            onChange={passwordHandler}
          />
          <button
            type="submit"
            className="text-white mb-[1.75rem] pt-[0.5rem] pb-[0.5rem] h-[3rem] bg-[#e50914] rounded items-center ] font-bold"
          >
            Sign Up
          </button>
          <p className="text-[#8c8c8c] text-base mt-[4.4rem]">
            Already have an Account?
            <Link to="/signin" className="text-white text-lg pl-1">
              Sign In
            </Link>
          </p>
          <p className="text-[#8c8c8c] text-sm  mt-[1rem]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a
              href="https://policies.google.com/privacy"
              className="text-[#0071eb] pl-1 hover:underline"
            >
              Learn More
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
