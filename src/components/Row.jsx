import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  const containerRef = useRef(null);
  useEffect(() => {
    const fetcher = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    };
    fetcher();
  }, [fetchUrl]);
  // console.log(movies[0].id);
  //   const leftArrow = document.querySelector(".leftArrow");
  //   const rightArrow = document.querySelector(".rightArrow");
  //   //   useEffect(() => {
  //   if (containerRef.current.scrollLeft === 0) {
  //     leftArrow.classList.add("hidden");
  //   } else {
  //     leftArrow.classList.remove("hidden");
  //   }
  //   if (
  //     containerRef.current.scrollLeft + containerRef.current.clientWidth ===
  //     containerRef.current.scrollWidth
  //   ) {
  //     rightArrow.classList.add("hidden");
  //   } else {
  //     rightArrow.classList.remove("hidden");
  //   }
  //   //   }, [leftArrow, rightArrow]);

  const slideLeft = (event) => {
    event.preventDefault();
    containerRef.current.scrollLeft -= 500;
  };

  const slideRight = (event) => {
    event.preventDefault();

    containerRef.current.scrollLeft += 500;
  };

  return (
    <>
      <h1 className="text-white font-bold p-4 md:pl-8 md:text-xl">{title}</h1>
      <div className="relative flex items-center p-4 md:pl-8 group">
        <AiOutlineLeft
          onClick={slideLeft}
          size={30}
          className="leftArrow invisible left-0 group-hover:visible text-white cursor-pointer z-10 absolute"
        />
        <div
          ref={containerRef}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies.map((item, id) => {
            return <Movie key={id} item={item} />;
          })}
        </div>
        <AiOutlineRight
          onClick={slideRight}
          size={30}
          className="rightArrow right-0 invisible group-hover:visible text-white z-10 absolute cursor-pointer"
        />
      </div>
    </>
  );
};

export default Row;
