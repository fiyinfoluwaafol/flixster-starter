import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import React, { useState, useEffect } from 'react';


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // Fetching data from the API
  async function fetchData(currentPage) {
    try{
      const apiKey = import.meta.env.VITE_API_KEY;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      };
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}&api_key=${apiKey}`, options);
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      const data = await response.json();
      console.log(data);
      setMovies(movies => [...movies, ...data.results]);
      // setMovies(data.results);
    }
    catch (error) {
      console.error(error);
    }
  };

  function onLoadMore () {
    setPageNum(pageNum => pageNum + 1);
    console.log("pageNum:", pageNum);
  }

  useEffect(() => {
    fetchData(pageNum);
  }, [pageNum]);

    return (
      <>
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
        <div id="load-bttn">
              <button onClick={onLoadMore}>Load More</button>
        </div>
      </>

    )
}

export default MovieList;
