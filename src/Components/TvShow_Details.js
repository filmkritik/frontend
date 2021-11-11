import React, { useEffect, useState } from "react";
import '../index.css';
import Navbar from "./Navbar";
import { withRouter,useParams, useLocation, useHistory } from "react-router";
import CastTvshow from "./Cast_Tvshow";


const Img_API = "https://image.tmdb.org/t/p/w1280";

const TvShowDetails = (props) => {

const location = useLocation();

const [ cred, setCred ] = useState([]);
    
    useEffect(() => {
        // fetch('http://localhost:8080/movie/+{location.state.id}+?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=credits')
        fetch(`https://api.themoviedb.org/3/tv/${location.state.id}/credits?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCred(data.cast);
        });
    }, []);

console.log(props);
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
                    {console.log(location.state.name)}
                
                <img src={Img_API + location.state.poster_path} alt={location.state.name} />
                <div className="movie-info">
                <h3>Original Language: {location.state.original_language}</h3>  
                <span>{location.state.vote_average}</span>
                </div>
                </div>
                <div >
                    <div style={{paddingLeft:"50px"}}>
                        <div>
                         <h2><label style={{fontWeight:"bolder"}}>{location.state.name}</label></h2>
                        </div>
                        <div>
                        <h3><b>Release Date:</b>  &nbsp;&nbsp;&nbsp;{location.state.first_air_date
                        }</h3>
                        </div>
                        <div class="shortcut_bar_wrapper" style={{display:"flex"}}>
                        <ul className="MovieMenu">
                    <li >
                        <button className="MovierButton">
                            Rate
                        </button>
                        <button className="MovierButton">
                            watchlist
                        </button>
                        <button className="MovierButton">
                            review
                        </button>
                        {/* <button className="MovierButton">
                            Movie
                        </button> */}
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
                <CastTvshow key={casts.id} {...casts} />)}                 
                </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
        </div>
        
    );
}

export default TvShowDetails;