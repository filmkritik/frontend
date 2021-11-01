import React from "react";

const Img_API = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";


const PopularPeopleDetails = ({ name, profile_path, popularity}) => ( 
        
<div className='movie'>
<img src={Img_API + profile_path} alt={name} />   
<div className="movie-info">
  <h3>{name}</h3>
  <span>{popularity}</span>
</div>
                    
</div>
);
    
export default PopularPeopleDetails;