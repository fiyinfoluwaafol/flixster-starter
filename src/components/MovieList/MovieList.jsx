import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import React, { useState, useEffect } from 'react';





function MovieList() {
  const [movies, setMovies] = useState([]);

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
        const data = await response.json();
        setMovies(data.results);
      }
      catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    return (
      <div className="movie-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              backdrop_path={movie.backdrop_path}
              original_title={movie.original_title}
              vote_average={movie.vote_average}
            />
          ))}
      </div>
    )
}

export default MovieList;
