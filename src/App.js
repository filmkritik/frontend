// import SignUp from './SignUp';
// import '../Styles/App.css';
// import '../Styles/SignUp.css';

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

function App() {
  return (
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
            </Switch>
        <Footer />
    </div>
</Router>
  );
}

export default App;