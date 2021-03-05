import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import ScrollArrow from './components/ScrollArrow';
import './App.css';
import axios from 'axios';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const QueryURL = new URLSearchParams(FEATURED_API.search);
  // QueryURL.append("page", "1");

  // const url = FEATURED_API + QueryURL.toString();
  // const URL_API = axios.get(url);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input 
          className="search" 
          type="search" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
    </header>
    <div className="movie-container">
      {movies.length > 0 && 
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
    <ScrollArrow />
    </>
  );
}

export default App;
