import React from 'react';

const SearchResult = (props) => {

    const image = `https://source.unsplash.com/400*300/?${props.name}`;

    return (
        <>
        <div>
            <img src={image} alt="search" />
        </div>
        </>
    )
}

export default SearchResult;