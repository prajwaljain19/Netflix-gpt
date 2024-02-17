import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();

      const filterData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : data.results[0];

      console.log(trailer);

      setTrailerId(trailer.key);
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>  
    </div>
  );
};

export default VideoBackground;
