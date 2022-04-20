import React, { useEffect, useState } from 'react';
import Gif from '../../Components/Gif/Gif';
import axios from 'axios';

function TrendingPage() {
    const [trending, setTrending] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    const fetchData = async () => {
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        let result;
        try {
            result = await axios.get(
                `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=12`
            );
            setIsLoaded(true);
            setTrending(result.data.data);
        } catch (err) {
            setIsLoaded(true);
            setError(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="m-3 text-center">
            <h3>Trending on Giphy</h3>
            {error && <span>Ada yang error ...</span>}
            {isLoaded ? (
                <div className="row d-flex mb-3 justify-content-center">
                    {trending.map((item) => (
                        <Gif title={item.title} url={item.images.original.url} key={item.id} />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default TrendingPage;
