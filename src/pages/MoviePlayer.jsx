import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MoviePlayer = () => {
  const { id } = useParams();
  const { name } = useSelector((state) => state.movieDetail);
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  // console.log(movies);
  console.log(name);
  let movie = movies?.find((item) => {
    if ((item.name.includes(name) && item.type == "Trailer") || "Teaser") {
      return item;
    }
  });
  console.log(movie);
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${movie?.key}`}
      controls
      height="100vh"
      width="100vw"
      playing={true}
      autoplay
    />
    // <div className="h-full w-full top-0 left-0">

    // </div>
  );
};

export default MoviePlayer;
