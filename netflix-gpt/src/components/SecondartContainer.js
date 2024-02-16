import React from "react";
import MovieList from "./MovieList";
// import { useSelector} from "./MovieList"
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);



    return ( 
    <div className="bg-black">
        <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.Toprated} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.Upcoming} />
        </div>
        </div>
     
    );

    
};

export default SecondaryContainer;
