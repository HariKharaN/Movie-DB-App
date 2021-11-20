import "./App.css";
import React, { useEffect, useState } from "react";
import Movie from "./Components/Movie";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=d4a2ea6952ee3b388e8f575f8801db1c&query=";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d4a2ea6952ee3b388e8f575f8801db1c&page=1;";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  };
  var result;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    }
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <div className="Navbar">
        <span className="nav-brand">
          <IconButton>
            <MovieRoundedIcon style={{ color: "white" }}></MovieRoundedIcon>
          </IconButton>
          <a className="logo" href="/">
            MovieDB
          </a>
        </span>
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
            />
            <span className="search-icon">
              <IconButton>
                <SearchIcon
                  onClick={handleSubmit}
                  style={{ color: "white" }}
                ></SearchIcon>
              </IconButton>
            </span>
          </form>
        </header>
      </div>
      {result && (
        <div className="results-show">Results for {searchTerm} . . .</div>
      )}
      <div className="movie-container">
        {movies.length > 0 ?
          movies.map((movie) => <Movie key={movie.id} {...movie} />) : <h1>No Movies Found</h1>}
      </div>
      <div className="pages">
        <span>Back</span>
        <span>Next</span>
      </div>
      <footer className="copyright">
        <span>&copy; 2021 MovieHK</span>
      </footer>
    </div>
  );
}

export default App;
