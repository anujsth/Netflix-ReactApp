import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../signIn.css";
import { useDispatch, useSelector } from "react-redux";
import {
  logIn,
  userPasswordHandler,
  userSignInUsernameorEmail,
} from "../features/authenticationSlice";

const SignIn = () => {
  const { error, userEmailUsername } = useSelector(
    (state) => state.authentication
  );
  console.log(error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signInDetail, setSignInDetail] = useState({
    userameOrEmail: "",
    password: "",
  });
  const inputUserHandler = (event) => {
    setSignInDetail({
      ...signInDetail,
      userameOrEmail: `${event.target.value}`,
    });
  };
  const inputPasswordHandler = (event) => {
    setSignInDetail({ ...signInDetail, password: `${event.target.value}` });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/");

    dispatch(userSignInUsernameorEmail(signInDetail.userameOrEmail));
    dispatch(userPasswordHandler(signInDetail.password));
    dispatch(logIn());
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
          <p className="text-white text-3xl mb-[1.75rem]">Sign In</p>
          <input
            type="text"
            required
            className="text-white pt-[0.6rem] mb-[1rem] pb-[0.4rem] px-[1rem]  h-[3rem] bg-[#333] rounded items-center placeholder-text-gray ]"
            placeholder="Username "
            onChange={inputUserHandler}
          />
          <input
            type="password"
            required
            className="text-white mb-[1.75rem] pt-[0.6rem] pb-[0.4rem] px-[1rem]  h-[3rem] bg-[#333] rounded items-center placeholder-text-gray ]"
            placeholder="Password"
            onChange={inputPasswordHandler}
          />
          <button
            type="submit"
            className="text-white mb-[1.75rem] pt-[0.5rem] pb-[0.5rem] h-[3rem] bg-[#e50914] rounded items-center ] font-bold"
          >
            Sign In
          </button>
          {error && <p className="text-red-500 text-xl text-center">{error}</p>}
          <p className="text-[#8c8c8c] text-base mt-[4.4rem]">
            New to Netflix?
            <Link to="/signup" className="text-white text-lg pl-1">
              Sign up Now
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

export default SignIn;
