import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import RowUser from "../components/RowUser";
import { searchHandler } from "../redux/features/searchSlice";
import SearchCards from "../components/SearchCards";
const Search = () => {
  const dispatch = useDispatch();
  const [searchedMovies, setSearchedMovies] = useState("");
  const [search, setSearch] = useState("");
  const { allMovie } = useSelector((state) => state.movieDetail);
  const { searchVal } = useSelector((state) => state.search);
  const searchHandlerFunc = (event) => {
    setSearch(event.target.value);
  };
  const submitHandler = (event) => {
    if (event.code == "Enter") {
      dispatch(searchHandler(search));
    }
  };

  useEffect(() => {
    setSearchedMovies(
      allMovie?.filter((item) =>
        item.title.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  }, [searchVal]);

  return (
    <div className="flex flex-col px-[1rem]">
      <div className="h-[7rem] w-[100%] flex items-center justify-center ">
        <input
          type="text"
          className=" text-white h-[2rem] w-15rem] text-xl border-b-2 border-red-700 outline-none bg-transparent placeholder-gray-400 focus:placeholder-transparent "
          onChange={searchHandlerFunc}
          onKeyDown={submitHandler}
          placeholder="Search for movies.."
        />
      </div>
      <SearchCards
        title={"Searched Movies"}
        likedMovie={searchVal ? searchedMovies : allMovie}
      />
    </div>
  );
};

export default Search;
