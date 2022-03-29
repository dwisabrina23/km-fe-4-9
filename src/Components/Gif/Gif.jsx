import React from 'react';
import './Gif.css';

function Gif({title, url}) {
    return (
        <div className='col-md-3 m-2 text-center gif-wrapper'>
            <img  src={url} alt={title}/>
            <p className='mt-3'>{title}</p>
        </div>
    );
}

export default Gif;