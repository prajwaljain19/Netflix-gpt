import React from "react";
import lang from "../utils/languageConstants";
import { useSelector} from "react-redux";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <body class="flex flex-col justify-center items-center h-screen">
        <h1 class="font-bold text-3xl text-white">GPT Movie Tab</h1>
        <p class="mt-4 text-white">
          Discover the Movie Suggestion You Need with GPT Engine
        </p>
        <div>
          <input
            type="text"
            class="border border-black mt-4 px-4 py-2 "
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className=" mx-2 px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold">
            {lang[langKey].search}
          </button>
        </div>
      </body>
    </div>
  );
};

export default GptSearchBar;
