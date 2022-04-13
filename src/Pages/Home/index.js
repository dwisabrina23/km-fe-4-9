import React, {useState} from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Gif from '../../Components/Gif/Gif';
import axios from 'axios';
import {useSelector} from "react-redux";

function HomePage() {
    const searchQuery = useSelector((state)=> state.search?.data);
    const [gifData, setGifData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async(searchData) => {
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        let result;
        try {
            result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchData}&limit=12`);
            setIsLoaded(true);
            setGifData(result.data.data);
        } catch (err) {
            setIsLoaded(true);
            console.error(err);
        }
    }
    return (
        <div>
            <SearchBar fetchData={fetchData}/>
            <div className="m-3 px-3 text-primary">
                {isLoaded && (
                    <p>Search result for <b>'{searchQuery}'</b>:</p>
                )}
            </div>
            <div className="row d-flex mb-3 justify-content-center">
                {gifData.map((item) => (
                    <Gif title={item.title} url={item.images.original.url} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;