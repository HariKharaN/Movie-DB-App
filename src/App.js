import "./App.css";
import React, { useEffect, useState } from "react";
import Movie from "./Components/Movie";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import Carousel from "./Components/Carousel";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=d4a2ea6952ee3b388e8f575f8801db1c&query=";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d4a2ea6952ee3b388e8f575f8801db1c&page=1;";

// const LATEST_MOVIE_API = "https://api.themoviedb.org/3/movie/latest?api_key=d4a2ea6952ee3b388e8f575f8801db1c&language=en-US";
const LATEST_RELEASE_API =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=d4a2ea6952ee3b388e8f575f8801db1c&language=en-US&page=1";
const POPULAR_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d4a2ea6952ee3b388e8f575f8801db1c&language=en-US&page=1";
// const UPCOMING_API =  "https://api.themoviedb.org/3/movie/upcoming?api_key=d4a2ea6952ee3b388e8f575f8801db1c&language=en-US&page=1";

const TRENDING_API =
  "https://api.themoviedb.org/3/trending/all/day?api_key=d4a2ea6952ee3b388e8f575f8801db1c";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesLatest, setMoviesLatest] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
    getMoviesLatest(LATEST_RELEASE_API);
    getMoviesPopular(POPULAR_API);
    getMoviesTrending(TRENDING_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };
  const getMoviesLatest = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMoviesLatest(data.results);
      });
  };
  const getMoviesPopular = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMoviesPopular(data.results);
      });
  };
  const getMoviesTrending = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMoviesTrending(data.results);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    }
    // setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMore = () => {
    setSearchTerm("");
  };
  const handleHome = () => {
    getMovies(FEATURED_API);
    setSearchTerm("");
  };

  return (
    <div id="home">
      {/* NAVBAR */}
      <div className="Navbar">
        <span className="nav-brand">
          <span className="movie-icon">
            <IconButton>
              <MovieRoundedIcon style={{ color: "white" }}></MovieRoundedIcon>
            </IconButton>
          </span>
          <span className="logo" onClick={handleHome}>
            MovieDB
          </span>
          <span className="actions">
            <span className="mx-1" onClick={handleHome}></span>
            <a className="nav-links active mx-2" href="#home" onClick={handleHome}>
              Home
            </a>
            <a className="nav-links mx-2" href="#popular">
              Popular
             </a>
            <a className="nav-links mx-2" href="#trending">
              Trending
            </a>
          </span>
        </span>
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
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
                  className="search-btn"
                ></SearchIcon>
              </IconButton>
            </span>
          </form>
        </header>
      </div>

      {/* CAROUSEl */}
      <div className="mt-5">
      {!searchTerm ? <Carousel /> : <></>}
      </div>

      {/* MAIN SECTION */}
      {!searchTerm ? (
        <div className="popular-section d-flex  ">
          <div className="degline">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="new-rel-text">Featured today</span>
        </div>
      ) : (
        <div className="new-rel-text res">Results...</div>
      )}

      <div className="movie-container mt-2">
        {movies.length > 0 ? (
          movies.map(
            (movie, index) =>
              index < 5 && (
                <Movie key={movie.id} {...movie} handleMore={handleMore} />
              )
          )
        ) : (
          <h1>No Movies Found</h1>
        )}
      </div>

      {/* POPULAR SECTION OF MOVIE */}
      <div id="popular">
        <div className="popular-section d-flex mt-5 ">
          <div className="degline">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="new-rel-text">Top Rated Movies</span>
        </div>
        <div className="movie-container mt-2">
          {moviesPopular.length > 0 ? (
            moviesPopular.map(
              (movie, index) =>
                index < 5 && (
                  <Movie key={movie.id} {...movie} handleMore={handleMore} />
                )
            )
          ) : (
            <h1>No Movies Found</h1>
          )}
        </div>
      </div>

      {/* LATEST SECTION */}
      <div className="popular-section d-flex mt-5 ">
        <div className="degline">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="new-rel-text">Latest Movies</span>
      </div>
      <div className="movie-container mt-2">
        {moviesLatest.length > 0 ? (
          moviesLatest.map(
            (movie, index) =>
              index < 5 && (
                <Movie key={movie.id} {...movie} handleMore={handleMore} />
              )
          )
        ) : (
          <h1>No Movies Found</h1>
        )}
      </div>

      {/* TRENDING SECTION */}
      <div id="trending">
        <div className="popular-section d-flex mt-5 ">
          <div className="degline">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="new-rel-text">Trending Movies</span>
        </div>
        <div className="movie-container mt-2">
          {moviesTrending.length > 0 ? (
            moviesTrending.map(
              (movie, index) =>
                index < 5 && (
                  <Movie key={movie.id} {...movie} handleMore={handleMore} />
                )
            )
          ) : (
            <h1>No Movies Found</h1>
          )}
        </div>
      </div>

      {/* FOOTER */}

      <div className="pages">
        <a href="#home" onClick={handleHome}>Back</a>
        <a href="#home" onClick={handleHome}>Next</a>
      </div>
      <div className="copyright">
        <span>&copy; 2021 MovieHK</span>
      </div>
    </div>
  );
}

export default App;
