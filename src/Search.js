import React, { useState } from 'react';
import SearchResult from './SearchResult';
const Search = () => {

    const [image, setImage] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data)
        setImage(data)
    }

    return (
        <>
            <div className="searchbar">
                <input className="searchbar_input" type="text" onChange={inputEvent} value={image} placeholder="Search anything" />
                <SearchResult name={image} />
            </div>
        </>
    )
}

export default Search;