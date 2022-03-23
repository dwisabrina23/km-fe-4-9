import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Gif from '../../Components/Gif/Gif';
import {gif} from '../../StaticData/raw-gif';

function HomePage(props) {
    return (
        <div>
            <SearchBar/>
            <Gif data={gif}/>
        </div>
    );
}

export default HomePage;