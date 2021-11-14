import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./WatchList_State";
import '../index.css';
import Navbar from "./Navbar";
import { withRouter,useParams, useLocation, useHistory } from "react-router";
import CastMovie from "./Cast_Movie";
//import { Rate } from 'antd';
import Reviews from "./Reviews";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import {setCookie, getCookie } from '../Cookies.js';
import {setCookieRate, getCookieRate } from '../Cookies.js';


const Img_API = "https://image.tmdb.org/t/p/w1280";

const MovieDetails = ({ props }) => {

    var pulled_rating;


        const [rate, setRate] = useState(0);
        console.log(rate);

const location = useLocation();
//const { details } = props.location.state;
//console.log("detail:"+{details});

console.log(location);

const [ cred, setCred ] = useState([]);

useEffect(() => {
    // fetch('http://localhost:8080/movie/+{location.state.id}+?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=credits')
    fetch(`https://api.themoviedb.org/3/movie/${location.state.id}/credits?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setCred(data.cast);
    });
}, []);

const { addMovieToWatchList, watchlist} = useContext(GlobalContext);

console.log(location.state.id);
console.log(watchlist);
let storedMovie = watchlist.find(o => o.id === location.state.id);
console.log(storedMovie);

const watchListDisabled = storedMovie ? true : false;
console.log(watchListDisabled);

const onLikeClick = (movie) => {
    var filterMovie = {
        id: movie.id,
        name: movie.title,
        imgPath: movie.poster_path
    }
    var lMovies = getCookie('likedMovies');
    var x = JSON.parse(lMovies);
    if(x)
    {
        x.push(filterMovie);
    }
    else
    {
        x = [filterMovie]
    }
    setCookie('likedMovies', JSON.stringify(x), 2);
}


// const pull_data =(data) => {
//     console.log(data);
// var pulled_rating = data.givenRating;
//     console.log(pulled_rating);
//     console.log(location.state.vote_average)
// location.state.vote_average = (location.state.vote_average + pulled_rating);

// return pulled_rating;
// }
// console.log(pull_data.pulled_rating);

// console.log(location.state.vote_average);
return (
        <div>
        <div>
            <Navbar />
        </div>
        <div >
            <div id="Menu" class="shortcut_bar_wrapper">
                {/* <ul className="MovieMenu">
                    <li >
                        <button className="MovieMenuButton">
                            overview
                        </button>
                        <button className="MovieMenuButton">
                            fandom
                        </button>
                        <button className="MovieMenuButton">
                            media
                        </button>
                        <button className="MovieMenuButton">
                            cast
                        </button>
                    </li>
                </ul> */}
            </div>
            <div className="MovieDetails">
                <div className="MoviePhoto">
                    {console.log("Hi")}
                    {console.log(location.state.title)}
                
                <img src={Img_API + location.state.poster_path} alt={location.state.title} />
                <div className="movie-info">
                <h3>Original Language: {location.state.original_language}</h3>  
                <div>{console.log(rate)}</div>
                <span>{(parseFloat(location.state.vote_average)+parseInt(rate))}</span>
                </div>
                <div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" className="like-button" onClick={() => onLikeClick(location.state)}>
                            Like
                        </button>
                </div>
                </div>
                <div >
                    <div style={{paddingLeft:"50px"}}>
                        <div>
                         <h2><label style={{fontWeight:"bolder"}}>{location.state.title}</label></h2>
                        </div>
                        <div>
                        <h3><b>Release Date:</b>  &nbsp;&nbsp;&nbsp;{location.state.release_date}</h3>
                        </div>
                        <div class="shortcut_bar_wrapper" style={{display:"flex"}}>
                        <ul className="MovieMenu">
                    <li >

                    <Container>
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label>
			<Radio
			type="radio"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
				alert(`Are you sure you want to give ${givenRating} stars ?`);
				console.log({givenRating});
                console.log(location.state.id);

                setCookieRate('ratedMovies', JSON.stringify(location.state.id), JSON.stringify(givenRating), 2);
			}
			}
			/>
			<Rating>
			<FaStar
				color={
				givenRating < rate || givenRating === rate
					? "rgb(255,215,0)"
					: "rgb(192,192,192)"
				}
			/>
			</Rating>
		</label>
		);
	})}
	</Container>                        
                        <button 
                        disabled={watchListDisabled}
                        onClick={() => addMovieToWatchList(location)}>
                            Add to WatchList
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/home/movies/details/reviews'>
                        <button onSubmit="./Reviews.js">
                            Review
                        </button>
                        </Link>
           
                    </li>
                </ul>
                </div>
                <div className="overview">
                    <p><h2>Overview</h2></p><br></br>
                    <p>{location.state.overview}</p>
                </div>
                <div>
                <h3>CAST:</h3><br></br>
                {/* <ul className="imag">
                    <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                </ul> */}
                {cred.length >0 && cred.slice(0,5).map((casts) => 
                <CastMovie key={casts.id} {...casts} />)}                
                </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
        </div>
        
    );
}

export default MovieDetails;