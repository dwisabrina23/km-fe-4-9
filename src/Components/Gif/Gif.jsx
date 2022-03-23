import React from 'react';

function Gif({data}) {
    return (
        <div className='text-center'>
            <img  src={data.url} alt={data.title}/>
        </div>
    );
}

export default Gif;