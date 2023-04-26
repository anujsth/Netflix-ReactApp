import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import { useSelector } from "react-redux";
import RowUser from "../components/RowUser";

const Home = () => {
  const { likedMovie } = useSelector((state) => state.authentication);
  // console.log(likedMovie);
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row title="Trending" fetchUrl={requests.requestTrending} />
      <Row title="Popular" fetchUrl={requests.requestPopular} />
      {/* <Row title="Horror" fetchUrl={requests.requestHorror} /> */}
      {likedMovie.length !== 0 && (
        <RowUser title="Liked" likedMovie={likedMovie} />
      )}
    </>
  );
};

export default Home;
