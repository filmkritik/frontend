import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import ForgotPassword from "./Components/ForgotPassword";
import 'antd/dist/antd.css';
import PopularPeople from "./NavLink_Components/PopularPeople";
import MovieGenres from "./NavLink_Components/MovieGenresPage";
import TvShowGenres from "./NavLink_Components/TvShowGenresPage";
import SearchBar from "./NavLink_Components/SearchBar";
import MovieDetails from "./Components/Movie_Details";
import TvShowDetails from "./Components/TvShow_Details";
import UserProfile from "./Components/UserProfile";
import {GlobalProvider} from "./Components/WatchList_State";
import WatchList from "./Components/WatchList";
import SecurityCode from "./Components/SecurityCode";
import ConfirmPassword from "./Components/ConfirmPassword";
import Reviews from "./Components/Reviews";


function App() {
  return (
    <GlobalProvider>
    <Router>
    <div className ="App">
        <Header />
            <Switch>

            <Route path="/" exact component={Login} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/home/movies" exact component={MovieGenres} />
            <Route path="/home/tvshows" exact component={TvShowGenres} />
            <Route path="/home/people" exact component={PopularPeople} />
            <Route path="/home/search" exact component={SearchBar} />
            <Route path="/home/movies/details" exact component={MovieDetails} />
            <Route path="/home/tvshows/details" exact component={TvShowDetails} />
            <Route path="/home/userprofile" exact component={UserProfile} />
            <Route path="/home/movies/details/watchlist" exact component={WatchList} />
            <Route path="/securityCode" exact component={SecurityCode} />
            <Route path="/ConfirmPassword" exact component={ConfirmPassword} />
            <Route path="/home/movies/details/reviews" exact component={Reviews} />

            </Switch>
        <Footer />
    </div>
</Router>
</GlobalProvider>  
);
}

export default App;