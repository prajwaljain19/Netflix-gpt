import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommedation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      return <div>There Is Movies</div>;
    } else {
      console.log(gptResult.choices[0]?.message?.content);
    }
    const gptMovies = gptResult.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addMovieResult({ MovieNames: gptMovies, gptResults: tmdbResults })
    );
  };

  return (
    <div>
      {console.log("objects created")}
      <form
        class="flex flex-col justify-center items-center h-screen"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 class="font-bold text-3xl text-white">GPT Movie Tab</h1>
        <p class="mt-4 text-white">
          Discover the Movie Suggestion You Need with GPT Engine
        </p>
        <div>
          <input
            ref={searchText}
            type="text"
            class="border border-black mt-4 px-4 py-2 "
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className=" mx-2 px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
