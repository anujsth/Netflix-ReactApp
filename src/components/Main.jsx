import React, { useEffect, useRef, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import Axios from "../axios";
import MoviePlayer from "../pages/MoviePlayer";
import { Navigate, useNavigate } from "react-router-dom";
import { likeHandler } from "../redux/features/authenticationSlice";
import { useDispatch } from "react-redux";
import instance from "../axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const heartClick = useRef(null);
  const dispatch = useDispatch();
  // const [seeMore, setSeeMore] = useState(true);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const navigate = useNavigate();
  useEffect(() => {
    instance
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);
  const truncate = (str) => {
    if (str?.length > 150) {
      return str.slice(0, 150) + "...";
    } else {
      return str;
    }
  };

  const playHandler = () => {
    navigate(`/video/${movie.id}`);
  };

  const watchHandler = (event) => {
    if (heartClick.current === event.currentTarget) {
      dispatch(likeHandler(movie));
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] bg-gradient-to-r from-black absolute"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="w-full absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button
              onClick={playHandler}
              className="border text-black bg-gray-300 px-5 py-2 border-gray-300 hover:bg-transparent hover:text-white transition-all"
            >
              Play
            </button>
            <button
              ref={heartClick}
              onClick={watchHandler}
              className="border text-white  px-5 py-2 border-gray-300 ml-4 hover:bg-white hover:text-black transition-all"
            >
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Release: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {truncate(movie?.overview)}
            {/* {seeMore ? truncate(movie?.overview) : movie.overview} */}
            {/* {seeMore && (
              <button
                className="text-gray-300"
                onClick={() => setSeeMore(!seeMore)}
              >
                See more
              </button>
            )} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
