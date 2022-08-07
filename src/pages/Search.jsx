import React from 'react'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import '../components/MoviesGrid.css'

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);

  };

  useEffect(() => {

    const searchedMovies = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchedMovies(searchedMovies);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Results for: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 && 
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search