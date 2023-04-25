import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../features/authenticationSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { userEmailUsername } = useSelector((state) => state.authentication);
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute ">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white py-2 px-6 rounded cursor-pointer">
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
