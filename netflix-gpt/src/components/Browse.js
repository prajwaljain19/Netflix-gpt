import React from "react";
import Header from "./Header";
import useNowPlayingMovies  from "../hooks/usenNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondartContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";  

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopratedMovies();
    useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
    )}
    </div>
  );
};

export default Browse;
