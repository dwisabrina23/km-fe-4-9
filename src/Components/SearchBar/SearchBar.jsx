import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchKeyword} from "../../Redux/Slice/FormSlice";

function SearchBar({fetchData}) {
    const dispatch = useDispatch();

    const formKosong = {
        data: "",
    };

    const [search, setSearch] = useState(formKosong);
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearch({
            ...search,
            [name]: value
        });
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchKeyword(search.data));
        fetchData(search.data);
    }

    return (
        <form className='p-3 d-flex mb-3 justify-content-center' onSubmit={handleSearch}>
                <input className='form-control px-3 mx-3' placeholder='Search..' name='data' value={search.data} onChange={handleChange}/>
                <button className='btn btn-primary px-3 mx-3' type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;