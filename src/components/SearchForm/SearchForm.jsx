import "./SearchForm.css";
import React, { useState } from "react";


function SearchForm(props) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        props.onSearch(searchQuery);}


    return (
        <div className="search-form">
            <form onSubmit={handleSearchSubmit}>
                <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
                <button type="submit">🔎</button>
            </form>
        </div>
    )
}

export default SearchForm;
