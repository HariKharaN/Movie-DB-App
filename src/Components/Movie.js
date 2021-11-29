import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const seVoteClass = (vote) => {
  if (vote > 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

function Movie({ title, original_name, poster_path, overview, vote_average,key, handleMore }) {

  

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
        alt={title}
      />
      <div className="movie-info">
        {
          title===null ?  <h5>{original_name}</h5> : <h5>{title}</h5>
        }
        <span className={`tag ${seVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <div className="over-more">
          <h4 className="over-title">Overview</h4>
          <button>More</button>
        </div>
        <p className="over-text">{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
