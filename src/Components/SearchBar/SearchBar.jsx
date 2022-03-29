import React, {useState} from 'react';

function SearchBar() {
    const formKosong = {
        data:""
    }
    const [search, setSearch] = useState(formKosong);
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearch({
            ...search,
            [name]: value
        });
    }

    return (
        <form className='p-3 d-flex mb-3 justify-content-center'>
                <input className='form-control px-3 mx-3' placeholder='Search..' name='data' value={search.data} onChange={handleChange}/>
                <button className='btn btn-primary px-3 mx-3' type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;