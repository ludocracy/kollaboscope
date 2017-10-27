import React, { Component } from 'react';
import CreatePlaylist from './CreatePlaylist';
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header>
          <h1>KOLLABOSCOPE</h1>
        </header>
        <div className="main">
          <h2>To Begin, Create a Playlist.</h2>
          <CreatePlaylist />
        </div>
      </div>
    );
  }
}

export default Landing;
