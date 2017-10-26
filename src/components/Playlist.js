import React, { Component } from 'react';

class Playlist extends Component {
  render() {
    return(
      <div>
        <header>
          <div id="playlist-title">
            <h1 class="playlist-name"></h1>
            <h2 class="playlist-descr"></h2>
          </div>
          <nav>
            <button id="go-home">Go Back Home</button>
          </nav>
          <button id="deletePlaylistBtn">Delete playlist</button>
        </header>
        <div class="song-crud display-element">
          <div class="song-search">
            <form id="searchForm">
              <p>Search and Add Songs:</p>
              <input type="text" id="songName" placeholder="New Song Name" />
              <button id="youtube-search-btn" type="submit" onclick="searchResultsToggle()">Search Youtube</button>
            </form>
            <section id="youtube-search-res">
              <div class="song-search-results">

              </div>
              <button id="createSongBtn" onclick="searchResultsToggle()">Add Song to Playlist</button>
              <div id="song-search-thumbnail">

              </div>
            </section>
          </div>
        </div>
        <div class="overflow-container">
          <p id="select-prompt">Select A Song to Play:</p>
          <ul class="song-container">

          </ul>
          <button id="deleteSongBtn">Delete Song from Playlist</button>
          <div id="song-embed">

          </div>
        </div>
      </div>
    )
  }
}

export default Playlist;
