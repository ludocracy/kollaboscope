import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <div className="song-crud display-element">
        <div className="song-search">
          <form id="searchForm">
            <p>Search and Add Songs:</p>
            <input type="text" id="songName" placeholder="New Song Name" />
            <button id="youtube-search-btn" type="submit">Search Youtube</button>
          </form>

        </div>
      </div>
    );
  }
}

export default Search;
