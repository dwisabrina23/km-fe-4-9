import React, {useState} from "react";
import axios from "axios";
import Gif from "../../Components/Gif/Gif";

function SearchPage() {

    const formKosong = {
        data: "",
    };

    const [search, setSearch] = useState(formKosong);
    const [gifData, setGifData] = useState([]);
    
    // state to check data is loaded
    const [isLoaded, setIsLoaded] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearch({
            ...search, 
            [name]: value
        });
    };
    
    const fetchData = async(searchData) => {
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        let result;
        try {
            result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchData}&limit=12`);
            // console.log(result.data.data);
            setIsLoaded(true);

            // store fetch result to gifData
            setGifData(result.data.data);
        } catch (err) {
            setIsLoaded(true);
            console.error(err);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        fetchData(search.data);
    }
    

    return (
        <div>
            <form className="p-3 d-flex mb-3 justify-content-center" onSubmit={handleSearch}>
                <input
                    className="form-control px-3 mx-3"
                    placeholder="Search.."
                    name="data"
                    value={search.data}
                    onChange={handleChange}
                />
                <button className="btn btn-primary px-3 mx-3" type="submit">
                    Search
                </button>
            </form>
            <div className="m-3 px-3 text-primary">
                {isLoaded && (
                    <p>Search result for <b>'{search.data}'</b>:</p>
                )}
            </div>
            <div class="row d-flex mb-3 justify-content-center">
                {gifData.map((item) => (
                    <Gif title={item.title} url={item.images.original.url} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
