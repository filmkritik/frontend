import React from "react";
import MovieDetails from "../Components/Movie_Details";
import { Link } from 'react-router-dom';


const Img_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average, cast}) => ( 
        
<div className='movie'>
<img src={Img_API + poster_path} alt={title} />   
<div className="movie-info">
  <h3>{title}</h3>
  <Link to={{
    pathname: "/home/movies/details",
    state: {title: title,
      poster_path: poster_path, 
      overview: overview,
      vote_average: vote_average,
      cast: cast}
  }}>
  <button>Details</button>
  </Link>
  <span>{vote_average}</span>
</div>
                   
</div>
);
    
export default Movie;