import React, { Component } from "react";

export default class StreamingPlatform extends Component {
  render() {
    return (
      <div className="container stream-head mt-3">
        <span className="stream-platform nav-active ">ALL</span>
        <span className="stream-platform  ">NETFLIX</span>
        <span className="stream-platform mx-2">PRIME VIDEO</span>
        <span className="stream-platform mx-2">HOTSTAR</span>
        <span className="stream-platform mx-2">MX PLAYER</span>
        <span className="stream-platform mx-2">JIOCINEMA</span>
        <span className="stream-platform mx-2">SONYLIV</span>
      </div>
    );
  }
}
