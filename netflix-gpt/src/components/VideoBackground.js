import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {

  const[trailerId, settrailerId] = useState(null); 


  const getMovieVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/572802/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();

    console.log(data);

    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    console.log(trailer);
    settrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <div>
      <iframe 
        src= {"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
