import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movie", movies);

  if(!movies || movies.length===0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>no movie display</p>
      </div>
    )
  }
  return (
    <div className="px-6">  
      <h1 className="text-3xl py-6 font-bold text-white">{title}</h1>
      <div className="flex overflow-auto">
        <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>  
    </div>
  );
};

export default MovieList;
