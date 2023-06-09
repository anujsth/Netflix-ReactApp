import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const RowUser = ({ title, likedMovie }) => {
  // const { searchVal } = useSelector((state) => state.search);
  const containerRef = useRef(null);
  const slideLeft = (event) => {
    event.preventDefault();
    containerRef.current.scrollLeft -= 500;
  };

  const slideRight = (event) => {
    event.preventDefault();

    containerRef.current.scrollLeft += 500;
  };
  //   console.log(likedMovie);
  return (
    <>
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
            {likedMovie.length !== 0 &&
              likedMovie.map((item, id) => {
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
    </>
  );
};

export default RowUser;
