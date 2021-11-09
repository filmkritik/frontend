import React from "react";
import '../index.css'

const MovieDetails = props => {
    return (
        <div >
            <div id="Menu" class="shortcut_bar_wrapper">
                <ul className="MovieMenu">
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
                </ul>
            </div>
            <div className="MovieDetails">
                <div className="MoviePhotoDiv">
                    <img className="MoviePhoto" src="">
                    </img>
                </div>
                <div >
                    <div style={{paddingLeft:"50px"}}>
                        <div>
                         <h2><label style={{fontWeight:"bolder"}}>LOL   Surprise : The Movie</label></h2>
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
                        <button className="MovierButton">
                            Movie
                        </button>
                    </li>
                </ul>
                </div>
                <div className="overview">
                    <p><h2>Overview</h2></p><br></br>
                    <p>Dazzling doll sisters Queen Bee and Royal Bee make their first movie with help <br></br>
                    from their fashionable friends in this one-of-a-kind magical 
                        adventure.</p>

                </div>
                <div>
                <h3>CAST:</h3><br></br>
                <ul className="imag">
                    <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                </ul>

                </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
        
        
    );
}

export default MovieDetails;