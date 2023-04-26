import React, { useEffect, useRef, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
// import MoviePlayer from "./MoviePlayer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieId, setMovieName } from "../redux/features/movieDetailSlice";
import { likeHandler } from "../redux/features/authenticationSlice";

const Movie = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const heartClick = useRef(null);
  //   const [mouseEnter, setMouseEnter] = useState(false);
  //   const onMouseEnter = () => {
  //     setMouseEnter(true);
  //   };
  //   const onMouseLeave = () => {
  //     setMouseEnter(false);
  //   };
  const clickedMovie = () => {
    navigate(`/video/${item.id}`);
    dispatch(setMovieName(item.title));
    dispatch(setMovieId(item.id));
  };
  const likeHandlerButton = (event) => {
    if (heartClick.current === event.currentTarget) {
      dispatch(likeHandler(item));
    }
    event.stopPropagation();
  };

  return (
    <>
      <div
        // onMouseEnter={onMouseEnter}
        // onMouseLeave={onMouseLeave}
        onClick={clickedMovie}
        className="pl-2 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block relative cursor-pointer"
      >
        <img
          className="w-full h-full rounded "
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />

        <div className="w-full h-full top-0 left-0 absolute hover:opacity-100 opacity-0 hover:bg-black/80 text-white">
          <div
            ref={heartClick}
            onClick={likeHandlerButton}
            className=" absolute top-1 left-2 hover:scale-125 h-[16px] w-[16px]"
          >
            <BsFillHeartFill className="text-white" />
          </div>

          <p className="white-space-normal text-white text-xs md:text-sm flex justify-center items-center h-full font-bold">
            {item?.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
{
  /* {mouseEnter && (
          <div className=" player absolute inset-0 height-[300px] w-[350px] bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
            <div className="relative w-full h-full ">
              <ReactPlayer
                //   url={}
                playing
                loop
                muted
                width="100%"
                height="100%"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl font-semibold mb-2 ">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        )}*/
}
