import React, { useEffect, useState, Component } from "react";
import { Input, Space } from 'antd';
import PopularPeople from '../NavLink_Components/PopularPeople';
import { Link } from 'react-router-dom';
import MovieGenres from "../NavLink_Components/MovieGenresPage";
import TvShowGenres from "../NavLink_Components/TvShowGenresPage";
import SearchMulti from "../NavLink_Components/SearchMulti";
import SearchBar from "../NavLink_Components/SearchBar";

const SEARCH_API = "https://api.themoviedb.org/3/search/multi?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1&include_adult=false&query=";

function Navbar() {

    const { Search } = Input;
    const onSearch = value => console.log(value);
    const [searchTerm, setSearchTerm]= useState('');
    const [movies, setMovies]= useState([]);

      const handleOnSubmit = (e) => {
        //e.preventDefault();

        if(searchTerm) {

        fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
        });
        setSearchTerm('');
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };
    

    const logout = () => {
        //authenticationService.logout();
        //history.push('/login')
        console.log();
            localStorage.clear();
            window.location.href = 'http://localhost:3000';
        };

        return (
            <div class="topnav">
                <div className="nav-left-items">
                    <div class='nav-left'>
                        <Link to='/home/movies'>
                        <a class="active" href="" onSubmit="./MovieGenresPage.js">Movies</a>
                        </Link>
                        <Link to='/home/tvshows'>
                        <a href="" onSubmit="./TvShowGenresPage.js">TV Shows</a>
                        </Link>
                        <Link to='/home/people'>
                        <a href="" onSubmit="./PopularPeople.js">People</a>
                        </Link>
                    </div>
                    <Link to= {{
                           pathname: '/home/search',
                           state: { movies }
                       }}> 
                    <form onSubmit={handleOnSubmit}>
                    <div className="topnav-right"> 
                    
                    <Space direction="vertical">
                       
                        <Search placeholder="Search for a movie, tv show, person..." value={searchTerm} 
                                //onChange={handleOnChange}
                                onClick={handleOnChange}
                                enterButton/> 
                                 
                        </Space>
                        </div> 
                        </form>
                        </Link> 

                    <div className="logout-btn">
                         <a className='logout-btn' href="#Logout" onClick={logout}>Logout</a>
                    </div>
                
            </div>
</div>
        );
    }

export default Navbar;