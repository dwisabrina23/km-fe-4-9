import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Gif from '../../Components/Gif/Gif';
import {data} from '../../StaticData/gif';

function HomePage(props) {
    return (
        <div>
            <SearchBar/>
            <div class="row d-flex mb-3 justify-content-center">
                {
                    data.map((item) => (
                        <Gif title={item.title} url={item.url} key={item.id}/>
                    ))
                }
            </div>
            
        </div>
    );
}

export default HomePage;