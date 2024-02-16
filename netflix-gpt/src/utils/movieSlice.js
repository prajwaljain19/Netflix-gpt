import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice ({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopratedMovies : (state, action) => {
            state.Toprated = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.Upcoming = action.payload;
        },
        
    },
});

export const { addNowPlayingMovies, addPopularMovies, addTopratedMovies, addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;