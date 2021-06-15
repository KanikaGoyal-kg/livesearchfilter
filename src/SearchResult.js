import React from 'react';

const SearchResult = () => {

    const img = `https://source.unsplash.com/600*400/?mango`;

    return (
        <>
        <div>
            <img src={img} alt="search" />
        </div>
        </>
    )
}

export default SearchResult;