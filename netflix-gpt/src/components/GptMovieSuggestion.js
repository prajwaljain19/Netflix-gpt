import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { MovieResults, MovieNames } = useSelector((store) => store.gpt);

  if (!MovieNames || !MovieResults) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {MovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={MovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
