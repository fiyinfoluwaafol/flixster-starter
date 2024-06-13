import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import React, { useState, useEffect } from 'react';


function MovieList({searchQuery}) {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // Fetching data from the API


  // Loading more data when user clicks on the button
  function onLoadMore () {
    setPageNum(pageNum => pageNum + 1);
    console.log("clicked", pageNum);
  }

  useEffect(() => {
    async function fetchData(currentPage,query="") {
        try{
          const apiKey = import.meta.env.VITE_API_KEY;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
            }
          };
          let endpoint;
          if (query === "") {
            endpoint = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}&api_key=${apiKey}`;
          } else {
            endpoint = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${currentPage}&api_key=${apiKey}`;
          }
          const response = await fetch(endpoint, options);
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

      if (searchQuery){
        setMovies([]);
        setPageNum(1);
        // console.log("searching", pageNum);
        fetchData(pageNum,searchQuery);
      } else {
        fetchData(pageNum,searchQuery);
      }
    }, [searchQuery, pageNum]);

    return (
      <>
        <div className="movie-list">
            {movies.map(movie => (
              <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
              vote_average={movie.vote_average}
              />
              ))}
        </div>
        <div id="load-bttn">
              <button onClick={onLoadMore}>Load More</button>
        </div>
      </>

)
}

export default MovieList;
