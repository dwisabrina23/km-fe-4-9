import React from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Pages/Home';
import TrendingPage from '../Pages/Trending/TrendingPage';

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
                <div className='d-flex justify-content-center align-item-center'>
                    <p>Page Not Found</p>
                </div>
            </Route>
        </Switch>
    );
}

export default Router;