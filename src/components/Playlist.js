import React, { Component } from 'react';
import Search from './Search';
import Songs from './Songs';

class Playlist extends Component {
  render() {
    return(
      <div>
        <header>
          <div id="playlist-title">
            <h1 className="playlist-name"></h1>
            <h2 className="playlist-descr"></h2>
          </div>
          <nav>
            <button id="go-home">Go Back Home</button>
          </nav>
          <button id="deletePlaylistBtn">Delete playlist</button>
        </header>
        <Search />
        <Songs />
      </div>
    )
  }
}

export default Playlist;
