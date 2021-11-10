import React, { useEffect, useState } from "react";
import Movie from './MoviePopular.js';
import MovieDetails from "../Components/Movie_Details";
import { Link } from 'react-router-dom';


const Popular = () => {   

const [ movies, setMovies ] = useState([]);

const movDetail = (movie) => {
    console.log("Hi prathima");
    
  }

useEffect(() => {
    fetch('http://localhost:8080/movie/popularMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
    //<Link to= "/home/movies/details">
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <Movie key={movie.id} {...movie} />)}
  </div>
  //</Link>
);
}

export default Popular;