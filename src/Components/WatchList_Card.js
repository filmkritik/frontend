import React from 'react';
import { WatchListControls } from './WatchListControls';


const Img_API = "https://image.tmdb.org/t/p/w1280";

export const WatchlistCard = ({location, type}) => {

    return (        
        <div>
        <div className='movie'>
        <img src={Img_API + location.state.poster_path} alt={location.state.title} />   

        <div className="movie-info">
        <h4>{location.state.title}</h4>
        </div>    
        </div>
        <WatchListControls type={type} location={location} />
        </div>


    );

}