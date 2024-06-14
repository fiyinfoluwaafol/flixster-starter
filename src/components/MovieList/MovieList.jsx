import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import React, { useState, useEffect } from 'react';


function MovieList({searchQuery, onMovieClick, filterCriteria}) {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // Loading more data when user clicks on the button
  function onLoadMore () {
    setPageNum(pageNum => pageNum + 1);
    console.log("clicked", pageNum);
  }

  // Handles passing in selected movie information for modal detail view
  async function fetchMovieDetails (movie_id) {
      try{
      const apiKey = import.meta.env.VITE_API_KEY;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      };
      let endpoint = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&append_to_response=videos&api_key=${apiKey}`;
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      const data = await response.json();
      onMovieClick(data);
      console.log(data);
      // setSelectedMovie(data);
      // setMovies(movies => pageNum === 1 ? data.results : [...movies, ...data.results]);
    }
    catch (error) {
      console.error(error);
    }
    console.log("clicked", movie_id);
    // setSelectedMovie({id: movie_id});
  }

  useEffect(() => {
    async function fetchData(currentPage, query="", genreId="") {
      // Fetching data from the API
      try{
        const apiKey = import.meta.env.VITE_API_KEY;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          }
        };
        let endpoint;
        // if (query === "") {
        //   if (genreId === "") {
        //     endpoint = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}&api_key=${apiKey}`;
        //   }
        //   else {
        //     endpoint =`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${genreId}&api_key=${apiKey}`
        //   }}
        if (genreId){
          endpoint =`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${genreId}&api_key=${apiKey}`
        }
        else if (query) {
          endpoint = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${currentPage}&api_key=${apiKey}`;
        }
        else {
          endpoint = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}&api_key=${apiKey}`;
        }
        const response = await fetch(endpoint, options);
        if (!response.ok) {
          throw new Error('Failed to fetch data from API');
        }
        const data = await response.json();
        console.log(data);
        setMovies(movies => pageNum === 1 ? data.results : [...movies, ...data.results]);
      }
      catch (error) {
        console.error(error);
      }
    };

    if (filterCriteria){
      setMovies([]);
      setPageNum(1);
      fetchData(pageNum,"",filterCriteria)
    }
    else if (searchQuery){
      setMovies([]);
      setPageNum(1);
      fetchData(pageNum,searchQuery,filterCriteria);
    } else {
      fetchData(pageNum,searchQuery);
    }
  }, [searchQuery, pageNum,filterCriteria]);

  return (
    <>
      <div className="movie-list">
          {movies.map(movie => (
            <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            originalTitle={movie.original_title}
            voteAverage={movie.vote_average}
            onMovieClick={() => fetchMovieDetails(movie.id)}
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
