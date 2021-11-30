import React, { Component } from "react";
import "../Stylesheets/WhatToWatch.css";

export default class WhatToWatch extends Component {
  render() {
    return (
      <div className="container">
        <div className="what-to-watch-section d-flex mt-5">
          <span className="new-rel-text">What to watch</span>
        </div>
        <div className="d-flex mt-4">
          <div className="degline-wtw">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="new-rel-text-wtw">From Your Watchlist</span>
        </div>
        <div className="container">
          <div className="row watchlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-bookmark-plus"
              viewBox="0 0 16 16"
              className="bookmark"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
            </svg>

            <span className="dis access-wat mt-2">
              Sign in to access your watchlist
            </span>
            <span className="dis1 access-wat mt-1">
              Save shows and movies to keep track of what you want to watch.
            </span>
            <a href="#home" className="access-wat-btn mt-4 signin-btn">
              Sign in
            </a>
          </div>
        </div>
      </div>
    );
  }
}
