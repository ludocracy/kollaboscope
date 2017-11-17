import React, { Component } from 'react';
import { database, firebaseListToArray } from '../utils/firebase';
import '../styles/SearchResults.css';

class SearchResults extends Component {
  render() {
    return(
      <section id="youtube-search-res">
        <div className="song-search-results">

        </div>
        <button id="createSongBtn">Add Song to Playlist</button>
        <div id="song-search-thumbnail">

        </div>
      </section>
    );
  }
}

export default SearchResults;
