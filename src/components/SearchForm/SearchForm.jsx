import "./SearchForm.css";
import React, { useState } from "react";

function SearchForm(props) {
    const [searchQuery, setSearchQuery] = useState("");

    // const [movies, setMovies] = useState([]);
    // const [searchPageNum, setSearchPageNum] = useState(1);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };


    //   Fetching data from the API
      async function getSearchResults(query) {
        try{
          const apiKey = import.meta.env.VITE_API_KEY;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
            }
          };
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`, options);

        //   const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${pageNum}&api_key=${apiKey}`, options);
          if (!response.ok) {
            throw new Error('Failed to fetch data from API');
          }
          const data = await response.json();
          setMovies(movies => pageNum === 1 ? data.results : [...movies, ...data.results]);
        }
        catch (error) {
          console.error(error);
        }
      };


    //   useEffect(() => {
    //     getSearchResults(pageNum);
    //   }, [searchQuery]);

    return (
        <div className="search-form">
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
            <button type="submit">Search</button>
            {/* <button type="submit" onClick={getSearchResults(searchQuery)}>Search</button> */}

            {/* TODO: Change this to a search icon */}
        </div>
    )
}

export default SearchForm;
