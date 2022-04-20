import React from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Pages/Home';
import TrendingPage from '../Pages/Trending/TrendingPage';
import NotFound from '../Components/NotFoundPage/NotFound';

function Router(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar/>
                <HomePage/>
            </Route>
            <Route exact path="/trending">
                <Navbar/>
                <TrendingPage/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    );
}

export default Router;