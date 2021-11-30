import React, { Component } from "react";
import "../Stylesheets/MoreToWatch.css";

export default class MoreToWatch extends Component {
  render() {
    return (
      <div className="container moretowatch mt-3 mb-5">
        <div className="d-flex mt-4">
          <div className="degline-mtw">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="new-rel-text-wtw mtw">More to watch</span>
        </div>
        <div className="wtw-help mt-2">
          MovieDb helps you select the perfect next show or movie to watch.
        </div>
        <div className="mt-3 mtm-btn-area d-flex">
          <a href="#whatToWatch" className="mtw-btn-btn">
            Watch Guide
          </a>
          <a href="#popular" className="mtw-btn-btn">
            Most Popular
          </a>
        </div>
      </div>
    );
  }
}
