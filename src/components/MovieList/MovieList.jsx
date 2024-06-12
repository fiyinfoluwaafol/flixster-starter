import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import React, { useState, useEffect } from 'react';





function MovieList() {
  let data = null;
  let movie = null;

  useEffect(() => {
    // Fetching data from the API
    async function fetchData() {
      try{
        const apiKey = import.meta.env.VITE_API_KEY;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          }
        };
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`, options);
        if (!response.ok) {
          throw new Error('Failed to fetch data from API');
        }
        data = await response.json();
        console.log(data);
      }
      catch (error) {
        console.error(error);
      }
    };

    movie = fetchData();
    console.log(movie);
  }, []);

    return (

      <div className="movie-list">
          {/* <MovieCard original_title={data.results[0].original_title} vote_average={data.results[0].vote_average} /> */}
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
      </div>
    )
}

export default MovieList;
