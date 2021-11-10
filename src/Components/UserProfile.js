import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar';
import AuthenticationService from "./AuthenticationService";

import { Tabs } from 'antd';

const {  TabPane  } = Tabs


function callback(key) {
    console.log(key);
  }


const UserProfile = () => {   

const [ likedMoviesDetails, setLikedMovies ] = useState([]);
const [ likedTvshowsDetails, setTVShows ] = useState([]);
const [ watchlistDetails, setWatchList ] = useState([]);
const [ historyDetails, setHistory ] = useState([]);

const RemoveItemFromWatchList = (values) => {
    AuthenticationService.postAPI('removeWatchListItem', {id: values.Id})
}

const RemoveLikedMovie = (values) => {
    AuthenticationService.postAPI('removeLikedMovie', {id: values.Id})
}

const RemoveLikedTVShow = (values) => {
    AuthenticationService.postAPI('removeLikedTvShow', {id: values.Id})
}


useEffect(() => {

    fetch('http://localhost:8080/getLikedMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setLikedMovies(data.results);
    });

    fetch('http://localhost:8080/getLikedTVShows')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setLikedMovies(data.results);
    });

    fetch('http://localhost:8080/getHistory')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setHistory(data.results);
    });


    fetch('http://localhost:8080/getWatchList')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setWatchList(data.results);
    });



}, []);

return(  
    <div>
    <div>
        <Navbar />
    </div>
    <div className='user-profile-container'>
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Edit Profile" key="1">
        Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Liked Movies/TV Shows" key="2">
        Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Watchlist" key="3">
        Content of Tab Pane 3
        </TabPane>
        <TabPane tab="History" key="4">
        Content of Tab Pane 4
        </TabPane>
    </Tabs>
    </div>
  </div>
);
}

export default UserProfile;