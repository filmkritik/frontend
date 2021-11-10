import React, { useEffect, useState } from "react";
import MovieGenreRomanceDetails from "./MovieGenreRomance_Details";

const MovieGenreRomance = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10749')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
    <div className='movie-container'>
    {movies.length > 0 && movies.slice(0,10).map((movie) => 
        <MovieGenreRomanceDetails key={movie.id} {...movie} />)}
 </div>
);
}

export default MovieGenreRomance;