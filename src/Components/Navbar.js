import React, { useEffect, useState, Component } from "react";
import { Input, Space } from 'antd';
import PopularPeople from '../NavLink_Components/PopularPeople';
import { Link } from 'react-router-dom';
import MovieGenres from "../NavLink_Components/MovieGenresPage";
import TvShowGenres from "../NavLink_Components/TvShowGenresPage";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''

        }
    }
    render() {

    const { Search } = Input;
    const onSearch = value => console.log(value);
    
    const logout = () => {
        //authenticationService.logout();
        //history.push('/login')
        console.log();
            localStorage.clear();
            window.location.href = 'http://localhost:3000';
        }

    
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
                <div className="topnav-right">
                    <Space direction="vertical">
                    <Search placeholder="Search for a movie, tv show, person..." onSearch={onSearch} enterButton />  
                    </Space>
                </div>
                </div>
            <div className="logout-btn">
                <a className='logout-btn' href="#Logout" onClick={logout}>Logout</a>
            </div>
                
            </div>
        );
    }
}

export default Navbar;