import React from "react";
import Header from "./Header";
import useNowPlayingMovies  from "../hooks/usenNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondartContainer";

const Browse = () => {
    useNowPlayingMovies();
    
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
