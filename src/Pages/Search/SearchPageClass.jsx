import React from "react";
import axios from "axios";
import Gif from "../../Components/Gif/Gif";

class SearchPageClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            gifData: [],
            // optional
            isLoaded: false,
        };
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({
            search: value,
        });
    }

    async fetchData(searchData) {
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        let result;
        try {
            result = await axios.get(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchData}&limit=12`
            );
            // console.log(result.data.data);
            this.setState({ isLoaded: true });

            // store fetch result to gifData
            this.setState({ gifData: result.data.data });
        } catch (err) {
            this.setState({ isLoaded: true });
            console.error(err);
        }
    }

    handleSearch(e){
        e.preventDefault();
        this.fetchData(this.state.search);
    }

    render() {
        return (
            <div>
                <form
                    className="p-3 d-flex mb-3 justify-content-center"
                    onSubmit={(e) => {this.handleSearch(e)}}
                >
                    <input
                        className="form-control px-3 mx-3"
                        placeholder="Search.."
                        name="data"
                        value={this.state?.search}
                        onChange={(e) => {this.handleChange(e)}}
                    />
                    <button className="btn btn-primary px-3 mx-3" type="submit">
                        Search
                    </button>
                </form>
                <div className="m-3 px-3 text-primary">
                    {this.state.isLoaded && (
                        <p>
                            Search result for <b>'{this.state.search}'</b>:
                        </p>
                    )}
                </div>
                <div className="row d-flex mb-3 justify-content-center">
                    {this.state?.gifData?.map((item) => (
                        <Gif
                            title={item.title}
                            url={item.images.original.url}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchPageClass;
