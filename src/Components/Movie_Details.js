import React from "react";
import '../index.css';
import Navbar from "./Navbar";
import { withRouter,useParams, useLocation, useHistory } from "react-router";


const Img_API = "https://image.tmdb.org/t/p/w1280";

const MovieDetails = (props) => {

const location = useLocation();
//const { details } = props.location.state;
//console.log("detail:"+{details});

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
                    {console.log(location.state.title)}
                <img src={Img_API + location.state.poster_path} alt={location.state.title} />
                </div>
                <div >
                    <div style={{paddingLeft:"50px"}}>
                        <div>
                         <h2><label style={{fontWeight:"bolder"}}>{location.state.title}</label></h2>
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
                <p>{location.state.cast}</p>
                </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
        </div>
        
    );
}

export default MovieDetails;