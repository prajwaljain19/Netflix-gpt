import React from "react";
import Header from "./Header";
import useNowPlayingMovies  from "../hooks/usenNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondartContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopratedMovies();
    useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
