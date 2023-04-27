import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/features/authenticationSlice";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const dispatch = useDispatch();

  const { userEmailUsername } = useSelector((state) => state.authentication);
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute ">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div className="flex items-center">
        <Link
          to="/search"
          className="flex justify-center items-center cursor-pointer transition-all hover:scale-105 "
        >
          <p className="text-white ">Search...</p>
          <AiOutlineSearch className="text-white text-xl cursor-pointer" />{" "}
        </Link>
        <button className="text-white py-2 px-6 rounded cursor-pointer ">
          {userEmailUsername}
        </button>
        <Link
          to="/signin"
          onClick={() => dispatch(logOut())}
          className="text-white py-2 px-6 bg-red-600 rounded cursor-pointer"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
