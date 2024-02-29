import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    MovieResults: null,
    MovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResult: (state, action) => {
      const { MovieNames, MovieResults } = action.payload;
      state.MovieNames = MovieNames;
      state.MovieResults = MovieResults;
    },
  },
});

export const { toggleGptSearchView, addMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
